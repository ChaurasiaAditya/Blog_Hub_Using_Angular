import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient:HttpClient) { }

  URL: string = "http://localhost:3000/blogs"

  // fetchBlogs():Observable<Array<Blog>>{
  //   return this.
  // }

}
