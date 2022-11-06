import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  // Added BlobService in parameter of constructor
  constructor(private blogService: BlogService) { }

  // declare a variable of blog type 
  blogs: Blog[] = [];

  /**
   * This functions calls when website loads.
   * And call the fetchBlog method from Service.blog.ts
   * the fetch blog method fetch all the bl;ogs present in the json file.
   * store the fetched blogs in the blogs Array.
   */
  ngOnInit(): void {
    this.blogService.fetchBlogs().subscribe({
      next: (data) => this.blogs = data,
      error: () => alert("Failed to Fetch Blogs due to Network Error!!!"),
      complete: () => alert("Blog Data Fetched Successfully!!!")
    })
  }
}