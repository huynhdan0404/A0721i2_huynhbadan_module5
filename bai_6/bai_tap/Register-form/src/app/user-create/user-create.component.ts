import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from 'src/models/user';
import { userDao } from '../Dao/userDao';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userFormCreate!: FormGroup;


  constructor() {}

  ngOnInit(): void {
    this.userFormCreate = new FormGroup({
      name: new FormControl(),
      age:new FormControl(),
      address:new FormControl(),
      email:new FormControl(),
    })
  }

  

  add(){
    userDao.users.push(this.userFormCreate?.value);
    this.userFormCreate.reset();
  }

}
