import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  total: Object;
  

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data=>{
      console.log(data)
      this.total=data
          })
  }

}
