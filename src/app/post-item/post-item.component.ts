import { Component,Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input() id !:number;
  @Input() title !:string;
  @Input() contenu !:string;
  @Input() index !:number;



  posts: any[];
  constructor(private postService: PostService) {
    this.posts = this.postService.Posts}
    ngOnInit() {
      this.postService.getPost().subscribe(posts => this.posts = posts);
  }

  getPosts() {
      this.postService.getPost()
          .subscribe(posts => this.posts = posts);
  }
  deletePost(id: number) {
    this.postService.deletepost(id).subscribe(() => {
      // Supprimer le post de la liste des posts affichés
      this.posts = this.posts.filter(post => post.id !== id);
    });
  }


}


