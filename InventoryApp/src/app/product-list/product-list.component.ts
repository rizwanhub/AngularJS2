import { Component, OnInit, Input , EventEmitter , Output  } from '@angular/core';//, EventEmitter , Output
//import { Product } from '../app.component';
import { Product } from '../app.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  inputs:['productlist'],
//   template:`
//   <div >  
//  <div *ngFor="let prod of productlist; let i=index">  
//   {{i + 1}} - {{prod.sku}}
// </div>

//   </div>
//   `
})
export class ProductListComponent implements OnInit {

productlist:Product[];

  constructor() {
     console.log('ProductListComponent...');
     //console.log(productlist);
     
   }

  ngOnInit() {
  }

}
