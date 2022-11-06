import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // Added HttpCLient in the Constructor parameter
  constructor(private httpClient: HttpClient) { }

  //URL from the Json server
  URL: string = "http://localhost:3000/blogs"

  // To get all the Blogs from JSON File
  fetchBlogs(): Observable<Array<Blog>> {
    return this.httpClient.get<Array<Blog>>(this.URL)
  }

  // To Add Blogs in the Json File
  addBlogs(data:Blog) {
    return this.httpClient.post(this.URL,data)
  }
}