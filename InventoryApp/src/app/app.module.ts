import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
//import { ProductinfoComponent } from './productinfo/productinfo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductPriceComponent } from './product-price/product-price.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  //  ProductinfoComponent,
    BreadcrumbsComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductPriceComponent,
    ProductDepartmentComponent,
    AddToCartComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
