import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ph',
  templateUrl: './ph.component.html',
  styleUrls: ['./ph.component.css']
})
export class PhComponent implements OnInit {
  photodata: any;
  constructor() { }

  ngOnInit() {
    this.photodata = JSON.parse(localStorage.getItem('photo'));
  }

}
