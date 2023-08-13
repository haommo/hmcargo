import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ManifestHistory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public manifestId: string

  @column()
  public historyDate: DateTime

  @column()
  public historyStatus: string

  @column()
  public historyDetail: string

  @column()
  public historyLocation: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
