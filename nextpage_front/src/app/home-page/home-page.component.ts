import { Component } from '@angular/core';
import { Book } from '../models/book'
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { UserList } from '../models/userlist';
import { UserlistService } from '../services/userlist.service';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    book : Book | undefined;
    id: number | undefined;
    list : Book[] = [];
    user : User | undefined;
    constructor(private route: ActivatedRoute, private bookService: BookService, private userList: UserlistService, private userService: UsersService){
        
    }
    ngOnInit(): void{
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.userService.logged().subscribe((user) => 
          this.userList.getBooksOfList('Read').subscribe((list) => 
            {this.list = list;this.getBook()}));
    }
    getBook(){
      if(this.list.length > 0){
        this.book = this.list[this.list.length - 1];
      }
      console.log(this.book)
    }
}
