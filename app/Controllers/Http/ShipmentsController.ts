import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateShipmentValidator from 'App/Validators/CreateShipmentValidator'
import Shipment from 'App/Models/Shipment'
import ShipmentPackage from 'App/Models/ShipmentPackage'
import UpdateShipmentValidator from 'App/Validators/UpdateShipmentValidator'
import Database from '@ioc:Adonis/Lucid/Database'


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

    public async tracking({response, params }) {
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
        .where("shipment_id", Shipment.shipment_id)
          .select(
            "shipment_id",
            "package_id",
            "package_weight"
          )

        return response.ok({
            shipment_detail: Shipment,
            shipment_package: ShipmentPackage

    });
    }
}
    
