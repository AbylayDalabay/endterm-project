import { Component, OnInit } from '@angular/core';
import { Category, CATALOG_LISTS } from '../models/category';
import { Game } from '../models/game';
import { UserlistService } from '../services/userlist.service';
import { UserList } from '../models/userlist';
@Component({
  selector: 'app-my-game',
  templateUrl: './my-game.component.html',
  styleUrls: ['./my-game.component.css']
})


export class MyGameComponent implements OnInit{
  catalog_list = CATALOG_LISTS;
  userList : UserList[];
  constructor(private userListService: UserlistService) {
    this.userList = [];
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userListService.getUsersLists().subscribe((userList) =>{
      this.userList = userList;
      console.log(this.userList[0].games)
    })
  }
}


