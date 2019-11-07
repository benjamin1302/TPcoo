import Order from './order.interface'

class OrderBuilder{
    constructor(){}

    /* Define all the steps needed to create a profile */

    setAnomyne(order: Order){
      order.contact.firstname = "XXXXXXXXXX"
      order.contact.phone = "XXX"
      order.contact.mail = "XXX@XXX"
      order.contact.lastname = "XXXXXXXXX"
      order.contact.billingAddress.postalCode = "00000"
      order.contact.billingAddress.city = "00000"
      order.contact.billingAddress.addressLine1 = "00000"
      order.contact.billingAddress.addressLine2 = "00000"

      order.contact.deliveryAddress.postalCode = "00000"
      order.contact.deliveryAddress.city = "00000"
      order.contact.deliveryAddress.addressLine1 = "00000"
      order.contact.deliveryAddress.addressLine2 = "00000"

      order.contact.billingAddress.postalCode = "59000"
      order.contact.billingAddress.city = "LILLE"
      order.contact.billingAddress.addressLine1 = ""
      order.contact.billingAddress.addressLine2 = ""

      order.carrier.contact.firstname = "XXXXX"
      order.carrier.contact.lastname = "XXXXXXXX"
      order.carrier.contact.phone = "XXX"
      order.carrier.contact.mail = "XXX@XXX"
      order.carrier.contact.headOfficeAddress.postalCode = "00000"
      order.carrier.contact.headOfficeAddress.city = "XXXXX"
      order.carrier.contact.headOfficeAddress.addressLine1 = "XXXXX"
      order.carrier.contact.headOfficeAddress.addressLine2 = "XXXXX"

      return order
    }
}

export default OrderBuilder;
