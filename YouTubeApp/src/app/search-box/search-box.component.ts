import { Component, OnInit, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from '../model/SearchResult';
import { YouTubeService } from '../Services/YoutubeService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  outputs: ['loading', 'results'],
})
export class SearchBoxComponent implements OnInit {

  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results: EventEmitter<SearchResult[]>= new EventEmitter<SearchResult[]>();
  
  constructor(public youtube: YouTubeService, private eleentRef: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.eleentRef.nativeElement, 'keyup')
    .map((extract: any) => extract.target.value)
    .filter((text: string) => text.length >1 )
    .debounceTime(250)
    .do(() => this.loading.next(true))
    .map((query: string) => this.youtube.search(query))
    .switch()
    .subscribe(
      (results: SearchResult[]) => {
                this.loading.next(false);
                this.results.next(results);
      },
      (error: any) =>{
                console.log(error);
                this.loading.next(false);
      },
      () => {
                this.loading.next(false);
      }
    );
  }

}
