import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders : Array<any> = []

  constructor(private service:ServiceService){}

  ngOnInit(){
    this.getOrders()
    this.orders = this.orders.reverse()
  }

  async getOrders(status?,id?) {
    let res: any = null;
    if(status){
      this.orders = await this.service.getOrder(status).then(res => res.records)
    } else if(id){
      this.orders = await this.service.getOrder(null,id).then(res => res.records)
    } else {
      this.orders= await this.service.getOrder().then(res => res.records)
    }
    console.log(this.orders);
  }
}
