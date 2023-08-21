import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {cart} from '../interface/cart'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart : cart = {
    "Id": '',
    "UserId": '',
    "TotalCost": 0,
    "Products": []
  }
  isLoading : boolean = true
  isCart: boolean = false

  constructor(private service: ServiceService){}

  ngOnInit(){
    this.getCart()
  }
  async getCart() {
    this.cart = await this.service.getUserCarts().then(res => res.records)
    this.isLoading = false
    console.log(this.cart.Products);
  }

  async clearCart(id?){
    const res = await this.service.clearCart(id)
    this.getCart()
    console.log(res);

  }
}
