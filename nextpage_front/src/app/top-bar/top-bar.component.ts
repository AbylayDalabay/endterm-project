import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
    check = false;
    findBook : string = '';
    // constructor(private bookService: bookService){

    // }
    showBar(){
      this.check = !this.check;
    }
    // addCompany(){
    //   this.bookService.findBook(this.findBook).subscribe((book) => {
    //     if(book.name == this.findBook){

    //     }
    //   })
    // }
  logged = false;
  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.logged = false;
    this.route.navigate(['/about']);
  }
}
