import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

const URL = 'http://localhost:8008/';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  async getProducts() {
    return await axios.get(URL+'products/seller').then(res => res.data)
  }

  async getUserCarts(){
    return await axios.get(URL+'cart').then(res => res.data)
  }

  async addProductToCart(productId:any){
    return await axios.post(URL+'cart/'+productId+'?quantity=1')
  }

  async clearCart(productId?){
    if(productId){
      return await axios.delete(URL+'cart/'+productId+'?quantity=1').then(res => res.data)
    } else
    return await axios.delete(URL+'cart').then(res => res.data)
  }

  async createOrder(){
    return await axios.post(URL+'orders').then(res => res.data)
  }
  async getOrder(status?:string,id?:string){
    if(status){
      return await axios.get(URL+'orders?status='+status).then(res => res.data)
    } else if(id) {
      return await axios.get(URL+'orders/'+id).then(res => res.data)
    } else {
      return await axios.get(URL+'orders').then(res => res.data)
    }
  }
}
