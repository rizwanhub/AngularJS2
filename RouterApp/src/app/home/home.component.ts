import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


data;
  selectedData;
  constructor(private http: Http){
    this.http.request('http://jsonplaceholder.typicode.com/posts')
      .subscribe((res: Response) => {
        this.data = res.json();
        console.log(this.data);
      });
      
  }

  clicked(id: number){
     this.http.request('http://jsonplaceholder.typicode.com/posts/'+ id)
      .subscribe((res: Response) => {
        this.selectedData = res.json();
        console.log(this.selectedData);
      });
  }


  ngOnInit() {
  }

}
