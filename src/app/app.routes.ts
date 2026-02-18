import { Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { AboutComponent } from './component/about/about.component';

import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', loadComponent: () => import('./component/products/products.component').then(m => m.ProductsComponent) },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];