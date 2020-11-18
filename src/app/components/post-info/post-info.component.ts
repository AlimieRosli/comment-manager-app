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

  public post : PostModel;
  private postId : number;
  public commentsList: Array<CommentModel>;
  public allComments: Array<CommentModel>;
  name : string = "";
  email : string = "";
  body : string = "";

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
          this.allComments = data
        },
        (error) => {
            console.error(error);
        }
      );
  }

  filter(){
    var filteredComment = this.allComments; // to reset commentlist to original data

    if(this.name.trim()){
      const regex = new RegExp("\\b"+this.name.trim()+"\\b", 'g');
      filteredComment =  filteredComment.filter((comment) => {
        return comment.name.match(regex);
      });
    }

    if(this.email.trim()){
      const regex = new RegExp("\\b"+this.email.trim()+"\\b", 'g');
      filteredComment =  filteredComment.filter((comment) => {
        return comment.email.match(regex);
      });
    }

    if(this.body.trim()){
      const regex = new RegExp("\\b"+this.body.trim()+"\\b", 'g');
      filteredComment =  filteredComment.filter((comment) => {
        return comment.body.match(regex);
      });
    }

    this.commentsList = filteredComment;
  }

  reset(){
    this.commentsList = this.allComments;
    this.name = "";
    this.email = "";
    this.body = "";
  }

}
