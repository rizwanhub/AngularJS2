import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data4: Object;
  loading: boolean;
 // other instance variables here
 http: Http;

 constructor(http: Http) {
  this.http = http;
 
}

makeRequest(): void {
 this.loading = true;
 this.http.request('http://jsonplaceholder.typicode.com/posts/1')
 .subscribe((res: Response) => {
 this.data4 = res.json();
 this.loading = false;
 });
}
 
}
