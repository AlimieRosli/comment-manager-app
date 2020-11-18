import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postsList: Array<PostModel>;

  constructor(private feedService : FeedService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.feedService.getPosts()
      .subscribe(
        (data) => {
          console.log('Data Retreived', data);
          this.postsList = data;
        },
        (error) => {
            console.error(error);
        }
      );
  }

}
