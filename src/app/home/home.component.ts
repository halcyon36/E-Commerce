import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  products : Array<any> = []
  constructor(private service : ServiceService, private router: Router){}

  ngOnInit(){
    this.getProducts()
  }

  getProducts() {
    this.service.getProducts().then(res => {
      this.products = res.records      
    })
  }
  async addProduct(id,isNav?){
    console.log(id);
    const res = await this.service.addProductToCart(id)
    if(isNav) this.router.navigate(['cart'])
  }
}


