import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import 'jqueryui';
declare var $: any;
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{
  findUser : string = '';
  users : User[] = []
    constructor(private route: Router,private userService: UsersService) {

    }
    ngOnInit(): void {
      $('#search').autocomplete({
        source: (request: { term: string; }, response: (arg0: User[]) => void) => {
          this.userService.getFindUsers(request.term).subscribe(data => {
            response(data.filter((user) => user.username.toLowerCase().startsWith(this.findUser.toLowerCase())));
          });
        },
        minLength: 3,
        select: (ui: { item: { username: string; }; }) => {
          this.findUser = ui.item.username;
        }
      });
    }
    myProfile = false;
    search() {
      this.userService.getFindUsers(this.findUser).subscribe((data) => {
        this.users = data;
      });
    }
}
