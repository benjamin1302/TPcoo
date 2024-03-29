import {
  Request,
  Response,
  Router,
} from 'express'

import Order from './order.interface'
import OrderService from './orders.services'

export default class OrdersController {
  public path = '/orders'
  public pathId = '/orders/:id'
  public router = Router()
  public orderService = new OrderService()

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAll)
    this.router.get(this.pathId, this.getById)
    this.router.post(this.path, this.create)
    this.router.delete(this.pathId, this.delete)
    this.router.put(this.pathId, this.update)
  }

  public getAll = async (request: Request, response: Response) => {
    let orders: Order[] = await this.orderService.getAll()
    response.json(orders).status(201)
  }

  public getById = async (request: Request, response: Response) => {
    const id = request.params.id
    // tslint:disable-next-line: triple-equals
    const foundOrder: Order = await this.orderService.getById(Number(id))
    if (!foundOrder) {
      return response.sendStatus(404)
    }
    response.json(foundOrder)
  }

  public create = async (request: Request, response: Response) => {
    let newOrder =  await this.orderService.create(request.body)
    response.status(201).json(newOrder)
  }

  public delete = async (request: Request, response: Response) => {
    let orderToDel =  await this.orderService.delete(Number(request.params.id))
    if( !orderToDel )
    {
      response.sendStatus(404).send("order to del not found")
    }
    response.sendStatus(204)
  }

  public update= async (request: Request, response: Response) => {
    const updateInformations = request.body
    const id = request.params.id

    let updatedData: boolean =  await this.orderService.update(updateInformations, parseInt(id))
    if(!updatedData){
      response.status(404).send("Data to update not found")
    }
    response.status(200).json([])
  }

}
