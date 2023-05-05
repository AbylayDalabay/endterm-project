import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import 'jqueryui';
import { LogService } from '../services/log.service';
declare var $: any;

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{
  findUser : string = '';
  users : User[] = []
      constructor(private usersService: UsersService, private logService: LogService, private route: Router) {
    // @ts-ignore
    this.user = this.user;
    }

    ngOnInit(): void {
      this.getUser();
      $('#search').autocomplete({
        source: (request: { term: string; }, response: (arg0: User[]) => void) => {
          this.usersService.getFindUsers(request.term).subscribe(data => {
            response(data.filter((user) => user.username.toLowerCase().startsWith(this.findUser.toLowerCase())));
          });
        },
        minLength: 3,
        select: (ui: { item: { username: string; }; }) => {
          this.findUser = ui.item.username;
        }
      });
    }
  errorMessage = '';
  user: User;
  getLetter(): string {
    return this.user?.username.charAt(0).toUpperCase() || '☠';
  }

  getUser(): void {
    this.usersService.getProfile().subscribe(user => {
      this.user = user;
    }, error => {
      this.errorMessage = error.message;
      this.logService.error(error);
      setTimeout( () => this.route.navigate(['/login']), 1000);
    });
  }

  updateUser(): void {
    this.usersService.updateUser(this.user).subscribe(user => {
      this.user = user;
    }, error => {
      this.getUser();
      this.errorMessage = error.message + (error.error ? ` (${JSON.stringify(error.error)})` : '');
      this.logService.error(error);
    });
  }
    myProfile = false;
    search() {
      this.usersService.getFindUsers(this.findUser).subscribe((data) => {
        this.users = data;
      });
    }
}
