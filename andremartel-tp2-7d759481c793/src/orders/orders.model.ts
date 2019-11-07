import {
  delAsync,
  getAsync,
  setAsync,
} from '../../utils/storage'

import Order from './order.interface'

export default class OrderService {
  public async getOrders(){
    return await getAsync('orders')
  }

  public async update(newValues: string){
    return await setAsync('orders', newValues)
  }

  public async delete(){
    return await delAsync('orders')
  }

}
