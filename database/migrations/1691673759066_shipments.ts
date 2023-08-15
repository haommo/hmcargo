import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'shipments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('shipment_id').notNullable().unique()
      table.dateTime('shipment_date')
      table.dateTime('order_date')
      table.string('total_package')
      table.string('sender_name')
      table.string('sender_address')
      table.string('receiver_name')
      table.string('receiver_address')
      table.string('receiver_phone')
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
