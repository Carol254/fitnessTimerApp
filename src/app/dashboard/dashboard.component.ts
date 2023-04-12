import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() { }


  ngOnInit(): void {



  }


  start_counting(){

  
  }

  pause_counting(){
  
  }

  stop_counting(){
  
  }

}
