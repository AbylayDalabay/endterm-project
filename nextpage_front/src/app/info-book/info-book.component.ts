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
    listbook = books;
    book : Book | undefined;
    fullDes: string | undefined;
    books : Book[] = []
    // myButton: HTMLElement;
    constructor(private route: ActivatedRoute, private bookService: BookService){
    //   this.myButton = document.getElementById('show')!;
    //   this.myButton.onclick = this.handleClick.bind(this);
    }
    // private handleClick() {
    //   console.log('Button clicked!');
    //   // здесь можно добавить ваш код обработки события
    // }

    ngOnInit(): void{
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      alert(this.id)
      this.bookService.getBookById(this.id).subscribe((book) => this.book = book);
      this.bookService.getBooks().subscribe((books) => this.books = books);
      alert(this.books[0].author)
      this.fullDes = this.book!.description;
      if (this.book!.description.length >= 328){
        this.changeDes();
          // alert(this.listbook[0].description.length);
        this.check = true;
      }
      // this.vacancyService.getVacanciesCompanies(this.id).subscribe((vacancies) => this.vacancies = vacancies);
    }
    changeDes(){
      if (this.check == true){
        this.book!.description = this.fullDes!
      }
      else{
        this.book!.description = this.book!.description.substring(0,328)
        let words = this.book!.description.split(' ');
        words.pop()
        this.book!.description = words.join(" ");
      }
      this.check = !this.check
    }
}
