import {
  delAsync,
  getAsync,
  setAsync,
} from '../../utils/storage'

export default class OrderModel {
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
