import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  c = 0;
  
  
  constructor() { }

  ngOnInit(): void {
  }

  
  cong(a:string, b:string){
    this.c= parseInt(a) + parseInt(b)
  }

  tru(a:string,b:string){
    this.c= parseInt(a)  - parseInt(b);
  }

  nhan(a:string,b:string){
    this.c= parseInt(a) * parseInt(b)
  }

  chia(a:string,b:string){
    this.c= parseInt(a) / parseInt(b)
  }
}
