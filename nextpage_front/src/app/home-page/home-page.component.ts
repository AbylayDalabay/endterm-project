import { Component } from '@angular/core';
import { Book } from '../models/book'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    book : Book | undefined;
    id: number | undefined;
    // constructor(private route: ActivatedRoute, private bookService: BookService){

    // }
    // ngOnInit(): void{
    //   this.id = Number(this.route.snapshot.paramMap.get('id'));
    //   this.bookService.getBook(this.id).subscribe((book) => this.book = book);
    // }
}
