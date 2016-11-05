import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Article {
 title: string;
 link: string;
 votes: number;

 constructor(title: string, link: string, votes?: number) {
 this.title = title;
 this.link = link;
 this.votes = votes || 0;
 }
 }
