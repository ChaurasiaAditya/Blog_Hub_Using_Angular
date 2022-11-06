import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent implements OnInit {

  // Added BlobService in parameter of constructor
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
  }

}
