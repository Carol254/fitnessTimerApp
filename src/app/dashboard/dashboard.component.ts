import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hours = 0;
  minutes = 0;
  seconds = 0;
  timer: Subscription = new Subscription;
  timerPaused:boolean = false;
  initialMinutes = 0;
  initialSeconds = 0;

  constructor() { }


  ngOnInit(): void {



  }


  start_counting(){
    this.initialMinutes = this.minutes;
    this.initialSeconds = this.seconds;
    this.timerPaused = false ;
    

  
  }

  pause_counting(){
  
  }

  stop_counting(){
  
  }

}
