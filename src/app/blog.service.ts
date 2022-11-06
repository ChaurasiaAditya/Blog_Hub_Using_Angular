import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  URL: string = "http://localhost:3000/blogs"
  
  constructor() { }
}
