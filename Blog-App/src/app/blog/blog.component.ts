import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  blogPosts: any[] = [];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.loadBlogPosts();
  }

  loadBlogPosts() {
    this.blogService.getBlogPosts().subscribe(data => {
      this.blogPosts = data;
    });
  }
}
