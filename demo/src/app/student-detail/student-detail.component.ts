import { Component, OnInit } from '@angular/core';
import { IStudent } from 'src/models/IStudent';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  
  student: IStudent = {
    id:1,
    name:"bá dân",
    age:5,
    mark:9,
    avatar:"https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
