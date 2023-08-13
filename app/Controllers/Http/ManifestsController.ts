import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Manifest from 'App/Models/Manifest'
import CreateManifestValidator from 'App/Validators/CreateManifestValidator'
import ManifestPackage from 'App/Models/ManifestPackage'
import UpdateManifestValidator from 'App/Validators/UpdateManifestValidator'
import ManifestHistory from 'App/Models/ManifestHistory'


export default class ManifestsController {
    public async index(){
        const manifest = await Manifest.all()
        return manifest
    }

    public async store ({request, response}:HttpContextContract) {
        const payload: any = await request.validate(CreateManifestValidator)
        const manifest: Manifest = await Manifest.create(payload)

        const manifestPackage = JSON.parse(request.input("manifest_package"))
        manifestPackage.forEach(async (item) => {
            const Package = new ManifestPackage()
            Package.manifestId = manifest.manifestId
            Package.packageId = item.package_id
            await Package.save()
          });

        const manifestHistory = JSON.parse(request.input("manifest_history"))
        manifestHistory.forEach(async (item) => {
            const History = new ManifestHistory()
            History.manifestId = manifest.manifestId
            History.historyDate = item.history_date
            History.historyStatus = item.history_status
            History.historyDetail = item.history_detail
            History.historyLocation = item.history_location
            await History.save()
          });
    
          return response.ok({
            message: "Mannifest create successfully"})
    }

    public async show({ params, response }:HttpContextContract){
        const manifest = await Manifest.query()
        .where('manifest_id', params.id)
        .firstOrFail()

        const manifest_package = await ManifestPackage.query()
        .where("manifest_id", params.id);

        const manifest_history = await ManifestHistory.query()
        .where("manifest_id", params.id);

        return response.ok({
            Manifest: manifest,
            Package: manifest_package,
            History: manifest_history

    });
    }

    public async update({ request, params, response }:HttpContextContract){
        const manifest = await Manifest.query()
        .where('manifest_id', params.id)
        .firstOrFail()

        const validated = await request.validate(UpdateManifestValidator)
        manifest.merge(validated)
        await manifest.save()
        return response.ok({
            message: "Manifest update successfully"})
    }

    public async destroy({ params, response }:HttpContextContract){
        const manifest = await Manifest.query()
        .where('manifest_id', params.id)
        .firstOrFail()
        await manifest.delete()
        return response.ok({
            message: "Manifest deleted successfully"})
    }
}