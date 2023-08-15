import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import ManifestPackage from 'App/Models/ManifestPackage'

export default class Manifest extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public manifestId: string

  @column()
  public manifestDate: DateTime

  @column()
  public manifestMawb: string

  @column()
  public manifestAirline: string

  @column()
  public totalPackage: string

  @column()
  public manifestStatus: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => ManifestPackage, {
    foreignKey: 'manifest_id',
  })
  public manifestPackages: HasMany<typeof ManifestPackage>
}
