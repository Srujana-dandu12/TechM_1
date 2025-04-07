import { provideRouter, Routes } from '@angular/router';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ProductComponent } from './pages/product/Product.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer-login', pathMatch: 'full' },
  { path: 'customer-login', component: CustomerLoginComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'product', component: ProductComponent },
];

export const appConfig = {
  providers: [provideRouter(routes)]
};
