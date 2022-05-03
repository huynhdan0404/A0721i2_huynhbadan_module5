import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  color = "";
  constructor() { }

  ngOnInit(): void {
  }
  red() {
    this.color = "red"
  }

  pink(){
    this.color = "pink"
  }

  green(){
    this.color = "green"
  }
}
