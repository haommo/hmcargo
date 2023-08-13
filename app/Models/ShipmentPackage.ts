import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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
}