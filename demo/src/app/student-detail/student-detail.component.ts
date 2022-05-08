import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  student1: Student = {
    name: "dan",
    age:15,
    address:"da nang"
  }

}
