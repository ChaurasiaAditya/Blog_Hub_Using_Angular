import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {

  constructor(private blogService: BlogService) { }

  // variable to store the blog from the input
  blog: Blog = {};

  /**
   * This method Add the blog to the json file using HTTP client.
   * it takes the blog object.
   */
  addBlog() {
    this.blogService.addBlogs(this.blog).subscribe({
      next: () => alert("Blog Added"),
      error: () => alert("Failed to Add Blogs due to Network Error!!!")
    })
  }
}
