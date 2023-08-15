import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Shipment from 'App/Models/Shipment'
import ManifestPackage from 'App/Models/ManifestPackage'

export default class ShipmentPackage extends BaseModel {
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public shipmentId: string

  @column()
  public packageId: string

  @column()
  public packageWeight: string

  @column()
  public packageContent: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Shipment)
  public shipment: BelongsTo<typeof Shipment>

  @hasOne(() => ManifestPackage, {
    foreignKey: 'packageId',
  })  
  public manifestPackage: HasOne<typeof ManifestPackage>
}