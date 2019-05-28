import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { OrderComponent } from './order/order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddnewCustomersComponent } from './addnew-customers/addnew-customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DetailsComponent } from './details/details.component';
// import { CustomerFormComponent } from './customer-form/customer-form.component';

const routes: Routes = [
  
  {path: "customer-list", component: CustomerListComponent},
  {path: "order/:id", component: OrderComponent},
  {path: "order-details/:id", component: OrderDetailsComponent},
  {path: "addnew-customers", component: AddnewCustomersComponent},
  {path: "customer-details/:id", component: CustomerDetailsComponent},
  {path: "details/:id", component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
