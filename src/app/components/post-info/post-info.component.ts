import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentModel } from 'src/app/models/comment.model';
import { PostModel } from 'src/app/models/post.model';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  private post : PostModel;
  private postId : number;
  commentsList: Array<CommentModel>;

  constructor(private route: ActivatedRoute, private feedService : FeedService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.postId = +this.route.snapshot.paramMap.get('id');
    this.getPostInfo();
    this.getComments();
  }

  getPostInfo(){
    this.feedService.getPostInfo(this.postId)
      .subscribe(
        (data) => {
          console.log('Post Retreived', data);
          this.post = data;
        },
        (error) => {
            console.error(error);
        }
      );
  }

  getComments(){
    this.feedService.getComments(this.postId)
      .subscribe(
        (data) => {
          console.log('Comments Retreived', data);
          this.commentsList = data;
        },
        (error) => {
            console.error(error);
        }
      );
  }

}
