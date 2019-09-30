import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logg',
  templateUrl: './logg.component.html',
  styleUrls: ['./logg.component.css']
})
export class LoggComponent implements OnInit {
rep:FormGroup
  value: any;



  constructor(private http:HttpClient) { 
    this.rep=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')
    })
  }

  ngOnInit() {
  }
  add(value){
    let data={
      email:value.email,
    password:value.password
    }
    this.http.post("https://reqres.in/api/login",data).subscribe(data=>{
console.log(data)
    })
  }
  
}
