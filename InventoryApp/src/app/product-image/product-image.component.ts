import { Component, OnInit } from '@angular/core';
//import { Product } from './../models/product';
import { Product } from '../app.component';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css'],
  inputs:['product']
})
export class ProductImageComponent implements OnInit {

product:Product;
  constructor() { 
    console.log('ProductImageComponent...');
  }

  ngOnInit() {
  }

}
