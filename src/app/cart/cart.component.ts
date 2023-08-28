import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import {cart} from '../interface/cart'
import { Router } from '@angular/router';

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

  constructor(private service: ServiceService,private router: Router){}

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
    await this.getCart()
    //need to rewrite this logic, its temprarary
    this.cart.Products = []
  }
  async createOrder(){
    const res = await this.service.createOrder()
    await this.getCart()
    this.router.navigate(['orders'])
  }
}
