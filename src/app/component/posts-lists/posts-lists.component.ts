import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/posts.model';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.css']
})
export class PostsListsComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    private postService: PostsService
  ) { 
    postService.readPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnInit(): void {
  }

}
