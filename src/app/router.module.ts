
import { Routes } from '@angular/router';
 
import { HomeComponent} from './home/home.component'
import { CartComponent} from './cart/cart.component'
import { ProductComponent} from './product/product.component'
import { UserComponent} from './user/user.component'
 
export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];