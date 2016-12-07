import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../model/SearchResult';

@Component({
  selector: 'app-youtubesearch',
  templateUrl: './youtubesearch.component.html',
  styleUrls: ['./youtubesearch.component.css']
})
export class YoutubesearchComponent implements OnInit {

loading: boolean;
  results: SearchResult[];
  constructor() { }

updateResult(results: SearchResult[]){
    this.results = results;
    console.log("results:", this.results); // uncomment to take a look
  }
  ngOnInit() {
  }

}
