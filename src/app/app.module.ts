import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedComponent } from './components/feed/feed.component';
import { PostInfoComponent } from './components/post-info/post-info.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FeedComponent,
    PostInfoComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
