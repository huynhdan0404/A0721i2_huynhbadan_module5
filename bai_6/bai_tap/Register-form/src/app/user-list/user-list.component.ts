import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models/user';
import { userDao } from '../Dao/userDao';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:IUser[] = userDao.users;
  userCreate: IUser | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
