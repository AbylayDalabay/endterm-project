import { Component } from '@angular/core';

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
}
