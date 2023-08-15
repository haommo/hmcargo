import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import ShipmentPackage from 'App/Models/ShipmentPackage'

export default class Shipment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public shipmentId: string

  @column()
  public shipmentDate: DateTime

  @column()
  public orderDate: DateTime
  
  @column()
  public senderName: string

  @column()
  public totalPackage: string

  @column()
  public senderAddress: string

  @column()
  public receiverName: string

  @column()
  public receiverAddress: string

  @column()
  public receiverPhone: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => ShipmentPackage , {
    foreignKey: 'package_id', 
  })
  public shipmentPackages: HasMany<typeof ShipmentPackage>
}
