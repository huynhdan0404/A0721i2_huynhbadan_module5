import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input()
  x:any;
  
  y:any;

  @Output()
  ratingBar: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  rating(a:any){
    for(let i=0;i <= this.x;i++){
        if(i == a){
          this.y = i;
        }
    }
    this.ratingBar.emit(this.y);
  }
}
