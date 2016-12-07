import { Component, Injectable, Inject  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchResult } from '../model/SearchResult';
import { Observable } from 'rxjs';


export const YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export const YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
//let loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');

 
@Injectable()
export class YouTubeService {
  constructor(public http: Http,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }

  search(query: string): Observable<SearchResult[]> {
    let params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    let queryUrl: string = `${this.apiUrl}?${params}`;

    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).items.map(item => {
          console.log("raw item", item); // uncomment if you want to debug
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
  }
}


export var youTubeServiceInjectables: Array<any> = [
 {provide: YouTubeService, useClass: YouTubeService},
 {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
 {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
 ];