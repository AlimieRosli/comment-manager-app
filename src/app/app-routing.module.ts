import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { PostInfoComponent } from './components/post-info/post-info.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/feed'},
  {
    path: 'feed',
    component: FeedComponent,
  },
  {
    path: 'postInfo/:id',
    component: PostInfoComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
