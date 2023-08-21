import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
