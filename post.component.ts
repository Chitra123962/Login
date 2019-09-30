import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  totaldata: Object;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe(data=>{
      console.log(data)
      this.totaldata=data
          })
  
  }
  
   
}
