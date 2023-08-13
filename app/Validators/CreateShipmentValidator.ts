import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateShipmentValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    shipment_id: schema.string({}, [
      rules.unique({ table: 'shipments', column: 'shipment_id' }),
      ]),
    shipment_date: schema.string(),
    sender_name: schema.string(),
    sender_address: schema.string(),
    receiver_name: schema.string(),
    receiver_address: schema.string(),
    receiver_phone: schema.string(),
    total_package: schema.string(),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'shipment_id.required': 'Shipment is required',
    'shipment_date.required': 'Sender name is required',
    'sender_name.required': 'Sender name is required',
    'sender_address.required': 'Sender name is required',
    'receiver_name.required': 'Sender name is required',
    'receiver_address.required': 'Sender name is required',
    'receiver_phone.required': 'Sender name is required'
  }
}
