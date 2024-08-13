// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Define the Home route
  { path: 'product', component: AddProductComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to Home by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
