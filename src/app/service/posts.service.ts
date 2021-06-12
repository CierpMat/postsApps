import { Injectable } from '@angular/core';
import { Post } from '../model/posts.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
    {
      userId: 123,
      id: 1,
      title: 'lorem1',
      body: 'Lorem1111'
    },
    {
      userId: 456,
      id: 2,
      title: 'lorem2',
      body: 'Lorem2222'
    }
  ]

  constructor(
    private http: HttpClient
  ) { }

  public fetchPosts(): Post[] {
    return this.posts;
  }

  public readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(BASE_URL)
    }

  public readPost(id: string): Observable<Post> {
    return this.http.get<Post>(BASE_URL + '/' + id);
  }

}

