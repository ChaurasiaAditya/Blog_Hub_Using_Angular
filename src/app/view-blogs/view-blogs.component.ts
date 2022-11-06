import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  // Blogservice in the constructor parameter
  constructor(private blogService: BlogService) { }

  // declare a variable to store the data from the json server
  blogs: Blog[] = [];

  /**
   * This method calls the fetchBlogs from blog service.
   * the fetchBlogs calls the data from json server.
   * store the fetched data in the blog variable in an array form.
   */
  ngOnInit(): void {
    this.blogService.fetchBlogs().subscribe({
      next: (data) => this.blogs = data,
      error: () => alert("Failed to Fetch Blogs due to Network Error!!!"),
      complete: () => alert("Blog Data Fetched Successfully!!!")
    })
  }
}