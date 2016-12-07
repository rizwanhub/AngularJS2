import { Component, OnInit, EventEmitter } from '@angular/core';
import {Product} from '../app.component';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
  inputs:['product'],
  outputs:['onProductSelected']
})
export class AddToCartComponent implements OnInit {

  product:Product[];
  currentProduct:Product;
   onProductSelected:EventEmitter<Product>;

  constructor() { 
    this.onProductSelected=new EventEmitter();
  }

  clicked(product:Product):void
   {
     this.currentProduct=product;
     this.onProductSelected.emit(product)
   }
   
  ngOnInit() {
  }

}
