import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post: PostModel;
  @Input('isFeed') isFeed: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
