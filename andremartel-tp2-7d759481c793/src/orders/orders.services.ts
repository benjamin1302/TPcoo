import OrderBuilder from './orders.builder'
import OrderModel from './orders.model'
import Order from './order.interface'

export default class OrderService {
  public orderBuilder = new OrderBuilder()
  public orderModel = new OrderModel()

  public async getById(id: number) {
    const rawOrders: string = await this.orderModel.getOrders()
    const orders: Order[] | [] = JSON.parse(rawOrders) || []
    let foundOrder: Order = orders.find((order) => order.id == Number(id))
    foundOrder = this.orderBuilder.setAnomyne(foundOrder)
    return foundOrder
  }

  public async getAll(){
    const raw: string = await this.orderModel.getOrders()
    const orders: Order[] = JSON.parse(raw) || []
    for( let order of orders)
    {
      order = this.orderBuilder.setAnomyne(order)
    }
    return orders
  }

  public async create(orderInformations :Order ){
    const rawOrders: string = await this.orderModel.getOrders()
    const orders: Order[] | [] = JSON.parse(rawOrders) || []

    const sortedOrders: Order[] | [] = orders.sort((previous: any, current: any) => {
      return current.id - previous.id
    })
    // tslint:disable-next-line: radix
    const lastId: number = sortedOrders.length > 0 ? Number(sortedOrders[0].id) : 0

    // Generate automatic data
    const orderToSave: Order = {
      ...orderInformations,
      id: lastId + 1,
      createdAt: new Date(),
    }
    const orderToPrint = this.orderBuilder.setAnomyne(orderToSave)
    const newOrders: Order[] = [...orders, orderToSave]
    await this.orderModel.update(JSON.stringify(newOrders))

    return orderToPrint
  }

  public async delete(id: number) {
    const rawOrders: string = await this.orderModel.getOrders()
    const orders: Order[] | [] = JSON.parse(rawOrders) || []
    // tslint:disable-next-line: triple-equals
    const orderToDelete: Order | null = orders.find((order) => order.id === Number(id))

    if (!orderToDelete) {
      return false
    }

    const newOrders: Order[] = orders.filter((order) => order.id !== orderToDelete.id)
    await this.orderModel.update(JSON.stringify(newOrders))
    return orderToDelete
  }

  public async update(newValues : Order, id: number) {
    const rawOrders: string = await this.orderModel.getOrders()
    const orders: Order[] = JSON.parse(rawOrders) || []
    var orderToUpdate

    for(var i in orders) {
      if(orders[i].id === id) {
        orderToUpdate = orders[i]
      }
    }

    if(!orderToUpdate) {
      return false
    }

    const newOrders = {
      ...orderToUpdate,
      ...newValues,
    }

    for(var i in orders) {
      if(orders[i].id === id) {
        orders.splice(parseInt(i), 1)
        orders.push(newOrders)
        await this.orderModel.delete()
        await this.orderModel.update(JSON.stringify(orders))
        return true
      }
    }
    return true
  }

}
