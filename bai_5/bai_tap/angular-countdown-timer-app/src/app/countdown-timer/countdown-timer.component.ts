import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input()
  x:any;

  y:any
  
  constructor() { }

  ngOnInit(): void {
  }

  start(){
    this.y = setInterval(() =>{this.x = --this.x}, 1000);
  }

  stop(){
    clearInterval(this.y);
  }

  reset(){
    clearInterval(this.y);
   this.x = 20;
  }
}

