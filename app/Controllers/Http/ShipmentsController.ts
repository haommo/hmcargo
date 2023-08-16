import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateShipmentValidator from 'App/Validators/CreateShipmentValidator'
import Shipment from 'App/Models/Shipment'
import ShipmentPackage from 'App/Models/ShipmentPackage'

import UpdateShipmentValidator from 'App/Validators/UpdateShipmentValidator'
import Database from '@ioc:Adonis/Lucid/Database'
const { parse, format } = require('date-fns')


interface EnumManifestItem {  
  history_date: Date;
  history_status: string;
  history_detail: string;
  history_location:string;
}
interface EnumShipPackageItem {
  shipment_id: string,
  package_id: string,
  package_weight: string,
  package_history: EnumManifestItem[]
}
const ShipmentPackDetail: EnumShipPackageItem[] = [{
  shipment_id: '',
  package_id: '',
  package_weight: '',
  package_history: []
}];
const manifestHistories: EnumManifestItem[] = [];  

export default class ShipmentsController {

    public async index(){
        const shipment = await Shipment.all()
        return shipment
    }

    public async store ({request, response}:HttpContextContract) {
        const payload: any = await request.validate(CreateShipmentValidator)
        const shipment: Shipment = await Shipment.create(payload)

        const shipmentsPackage = JSON.parse(request.input("shipment_package"))
        shipmentsPackage.forEach(async (item) => {
            const Package = new ShipmentPackage()
            Package.shipmentId = shipment.shipmentId
            Package.packageId = item.package_id
            Package.packageWeight = item.package_weight
            Package.packageContent = item.package_content
            await Package.save()
          });
    
    return response.ok(shipment)
    }

    public async show({ params, response }:HttpContextContract){
        const shipment = await Shipment.query()
        .where('shipment_id', params.id)
        .firstOrFail()

        const shipment_package = await ShipmentPackage.query()
        .where("shipment_id", params.id);

        return response.ok({
            shipment_detail: shipment,
            shipment_package: shipment_package

    });
    }

    public async update({ request, params }:HttpContextContract){
        const shipment = await Shipment.query()
        .where('shipment_id', params.id)
        .firstOrFail()

        const validatedData = await request.validate(UpdateShipmentValidator)
        shipment.merge(validatedData)
        await shipment.save()
        return shipment
    }

    public async destroy({ params, response }:HttpContextContract){
        const shipment = await Shipment.query()
        .where('shipment_id', params.id)
        .firstOrFail()
        await shipment.delete()
        return response.ok({
            message: "Shipment deleted successfully"})
    }

    public async tracking({params, response }) {                
      const axios = require('axios');     
      
      const Shipment = await Database.from("shipments")
          .where("shipment_id", params.id)
          .select(
            "shipment_id",
            "sender_name",
            "sender_address",
            "receiver_name",
            "receiver_address",
            "receiver_phone"
          )
          .first();
          if (!Shipment) {
            return response.notFound({ message: "Shipment not found" });
        }

        const ShipmentPackage = await Database.from("shipment_packages")
        .where("shipment_id", params.id)
          .select(
            "shipment_id",
            "package_id",
            "package_weight"
          )    
          const ShipmentPackDetail:EnumShipPackageItem[] = [];     
                
          const promises1 = ShipmentPackage.map(async (shipment, index) => {
            const manifestHistories:EnumManifestItem[] = []; 
            const manifestAnotherHistory = await Database
            .from('manifest_packages')
            .join('manifest_histories', (query) => { 
              query
                .on('manifest_histories.manifest_id', '=', 'manifest_packages.manifest_id')
                .andOnVal('manifest_packages.package_id', '=', shipment.package_id)
            })
            .select('manifest_histories.history_date', 'manifest_histories.history_status', 'manifest_histories.history_detail', 'manifest_histories.history_location')
          
            manifestAnotherHistory.forEach(element => {
              manifestHistories.push({                  
                history_date: element.history_date,
                history_status: element.history_status,
                history_detail: element.history_detail,
                history_location: element.history_location
              });
            });  

            try {
              const apiUrl = 'https://api.myems.vn/TrackAndTraceItemCode?itemcode=' + shipment.package_id + '&language=0'
              // const responseItem = await axios.get(apiUrl);
              // const responseData = responseItem.data;            
              // console.log('responseData==================>', responseItem.code)

              await axios.get(apiUrl)
              .then(responseData => {
                // Check if data is present in the response
                if (responseData.data) {
                  responseData.data.List_TBL_DINH_VI.forEach((packHistory, historyIndex) => {
                    //get the history status transit or delivered
                    let history_status = '';
                    if (packHistory.TRANG_THAI.search('Phát thành công') == -1 || packHistory.TRANG_THAI.search('Phát thành công') == -1)
                      history_status = 'transit';
                    else
                      history_status = 'Delivered';
            
                    //get the history location
                    let history_location = '';
                    const pieces = packHistory.VI_TRI.trim().split(',')
                    history_location = pieces[pieces.length - 1]
            
                    //get the history date
                    let history_date = new Date();
                    const myDate = parse(packHistory.NGAY, 'd/MM/yyyy', new Date())
                    history_date = format(myDate, 'yyyy-MM-dd')
            
                    //get the history detail
                    let history_detail = '';
                    let pos = packHistory.TRANG_THAI.indexOf('(');
                    history_detail = packHistory.TRANG_THAI.slice(0, pos);
                    
                    manifestHistories.push({                  
                      history_date: history_date,
                      history_status: history_status,
                      history_detail: history_detail,
                      history_location: history_location
                    });
                  });                         
                    
                  ShipmentPackDetail[index] = {
                    shipment_id: params.id,
                    package_id: shipment.package_id,
                    package_weight: shipment.package_weight,
                    package_history: manifestHistories
                  }
                  console.log('params.id========='+index+'====>', params.id);
                } else {
                  // Handle the case where no data is present in the response
                  console.log(90909090);
                }
              })
              .catch(error => {
                // Handle the API error
                console.log('error here=============>', manifestHistories);
                ShipmentPackDetail[index] = {
                  shipment_id: params.id,
                  package_id: shipment.package_id,
                  package_weight: shipment.package_weight,
                  package_history: manifestHistories
                }
                console.error(error);

              });                       
            } catch (error) {
              console.error(error);
            }
          });
          
          await Promise.all(promises1);
          
          return response.ok({
            shipment_detail: Shipment,
            shipment_package: ShipmentPackDetail                
          });
          
    }
}
    
