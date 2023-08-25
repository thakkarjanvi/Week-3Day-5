import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
  postId!: string;
  post: any; // Initialize with an empty object
  comments: any; // Initialize with an empty array


  constructor(private route: ActivatedRoute, 
    private http: HttpClient) { }

    ngOnInit(): void {
      // Get the post ID from the route parameter
      this.postId = this.route.snapshot.params['id'];
  
      // Fetch post details and comments using HttpClient
      this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}`).subscribe((data) => {
        this.post = data;
      });
  
      this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.postId}/comments`).subscribe((data) => {
        this.comments = data;
      });
    }
  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.postId = params['id'];
  //     // Use postId to fetch and display the post details
  //     this.http.get(`https://your-api-url.com/posts/${this.postId}`).subscribe(data => {
  //     // Handle the data and update your component's properties
  //   });
  //   });
  // }
}

