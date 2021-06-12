import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/posts.model';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.css']
})
export class PostsItemComponent implements OnInit {

  @Input() post: Post = {
    userId: 0,
    id:0,
    body: '',
    title: ''
  }

    @Input() showButton = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

public onShowPost(id: number): void {
  this.router.navigate(['/', 'posts', id]);
}

}
