import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHTTPComponent } from './simple-http/simple-http.component';
import { youTubeServiceInjectables } from './Services/YoutubeService';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { YoutubesearchComponent } from './youtubesearch/youtubesearch.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHTTPComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YoutubesearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [youTubeServiceInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
