import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: any[];
  constructor(private postService: PostService) {
    this.posts = this.postService.Posts}
    ngOnInit() {
      this.getPosts();
      this.postService.getPost().subscribe((posts) => {
        this.posts = posts;
      });
  }

  getPosts() {
      this.postService.getPost()
          .subscribe(posts => this.posts = posts);
  }

}


