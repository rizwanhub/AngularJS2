import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css'],
  inputs:['price'],
})
export class ProductPriceComponent implements OnInit {

price:number;
  constructor() { 
     
  }

  ngOnInit() {
  }

}
