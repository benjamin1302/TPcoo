import Order from './order.interface'

class OrderBuilder{
    constructor(){
    }

    /* Define all the steps needed to create a profile */

    setAnomyne(order: Order){
      order.contact.firstname = "toto"
      order.contact.phone = "XXX"
      order.contact.mail = "XXX@XXX"
      order.contact.lastname = "toto"
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
      order.contact.billingAddress.addressLine1 = "PAS d'addresse"
      order.contact.billingAddress.addressLine2 = "Pas d'&ddress"

      order.carrier.contact.firstname = "TUTU"
      order.carrier.contact.lastname = "TUTU tutu"
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
