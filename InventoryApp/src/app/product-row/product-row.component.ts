import { Component, OnInit, Input } from '@angular/core';
//import { Product } from './../models/product';
import { Product } from '../app.component';
@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  inputs:['product']
})
export class ProductRowComponent implements OnInit {

 product:Product;

  constructor() { 
    console.log('ProductRowComponent...');
  }
productWasSelected(product: Product) : void {
      alert(product.sku + " is added to cart");
    console.log( 'Product clicked: ' , product);

}
  ngOnInit() {
  }

}
