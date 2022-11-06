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
  blogs: Blog[] = []

  ngOnInit(): void {
  }

}
