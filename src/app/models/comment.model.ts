import { PostModel } from './post.model';

export class CommentModel extends PostModel {
    name: string;
    email: string;

    constructor() {
        super();
        this.name = null;
        this.email = null;
    }
  }
  