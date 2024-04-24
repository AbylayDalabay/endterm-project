import { Component, Input, OnInit } from '@angular/core';
import { UserList } from '../models/userlist';
import { UserlistService } from '../services/userlist.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../models/game';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  @Input() list: UserList ;
  games! : Game[];

  constructor(private userListService: UserlistService, ) {
    this.list = {} as UserList;
    
    // this.games = this.list.games
  }
  ngOnInit(): void {
    this.getBooksOfList();
  }
  
  
  getBooksOfList() {
    this.userListService.getGameOfList(this.list.name).subscribe((games) =>{
      this.games = games;
    })
  }
}
