import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/posts.model';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts-show',
  templateUrl: './posts-show.component.html',
  styleUrls: ['./posts-show.component.css']
})
export class PostsShowComponent implements OnInit {

  public post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id') || '0';

    this.postsService.readPost(postId).subscribe(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  public onGoBack(): void {
    this.router.navigate(['/', 'posts']);
  }

}
