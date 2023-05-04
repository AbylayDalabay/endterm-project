import { Component } from '@angular/core';
import { Book, books } from '../models/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css']
})
export class InfoBookComponent {
    check = false;
    id : number | undefined;
    fullDes: string = ''
    book : Book;
    constructor(private route: ActivatedRoute, private bookService: BookService){
       this.book = {} as Book
    }

    ngOnInit(): void{
      this.route.paramMap.subscribe((params) => {
        const id = Number(params.get('id'));
        if (id != undefined){
          this.getBook(id);
        }
        else{

        }
      })
    }
    getBook(id:number){
      this.bookService.getBookById(id).subscribe((book) => {this.book = book;
      this.getInfo(this.book.description);});
    }
    getHome(){
      
    }
    getInfo(description:string): void{
      this.fullDes = description;
      if (description.length >= 328){
        this.changeDes();
        this.check = true;
      }
    }
    changeDes(){
      if (this.check == true){
        this.book.description = this.fullDes
      }
      else{
        this.book.description = this.fullDes.substring(0,328)
        let words = this.book.description.split(' ');
        words.pop()
        this.book.description = words.join(" ");
      }
      this.check = !this.check
    }
}
