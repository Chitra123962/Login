import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
trip:FormGroup
  router: any;
  constructor(private http:HttpClient,router:Router) { 
    this.trip=new FormGroup({
userid:new FormControl(''),
id:new FormControl(''),
title:new FormControl(''),
completed:new FormControl('')
    })
  }

  ngOnInit() {
  }
  add1(a){
    let data={
      userid:a.value.userid,
      id:a.value.id,
      title:a.value.title,
      completed:a.value.completed
    };
    this.http.post("https://jsonplaceholder.typicode.com/todos",data).subscribe(data=>{
    console.log(data)
    // this.router.navigateByUrl('task')
  })
  }
}
