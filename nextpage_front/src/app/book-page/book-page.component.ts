import { Component, OnInit } from '@angular/core';

import { reviews } from '../models/review';
import { Book } from '../models/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit{

    rate : number = 0;
    rating: number = 70;
    selectedOption: string | undefined;
    add = false;
    name: string | undefined = "Nurkhan";
    review: string | undefined;
    bookId : number = 1;
    id: number = 2;
    books : Book[] = []
    book : Book
    constructor(private route: ActivatedRoute, private bookService: BookService){
      //   this.myButton = document.getElementById('show')!;
      //   this.myButton.onclick = this.handleClick.bind(this);
      this.book = {} as Book
    }
    ngOnInit(): void{
      const ratingItemsList = document.querySelectorAll('.rating_item');
      const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
      ratingItemsArray.forEach(item => item.parentNode.dataset.totalValue = this.rate)
      this.route.paramMap.subscribe((params) => {
        const id = Number(params.get('id'));
      })
      this.Star();
    }
    getBook(id:number){
      this.bookService.getBookById(id).subscribe((book) => {this.book = book;
      console.log(this.book.title)});
      // console.log(this.book.id)

    }
    Star(){
      const myStar = document.getElementById('rating_item_part');
      myStar!.style.background = `linear-gradient(to right,yellow ${this.rating}%, transparent 10%)`;
      myStar!.style.webkitBackgroundClip = 'text';
      myStar!.style.webkitTextFillColor = 'transparent';
    }
    changeRate(rate:number){
        this.rate = rate;
        // alert(this.rate)
        const ratingItemsList = document.querySelectorAll('.rating_item');
        const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
        ratingItemsArray.forEach(item => item.parentNode.dataset.totalValue = this.rate)
        // for(let i = 1; i <= this.rate; i++){
        //   ratingItemsArray[i]
        // }
    }
    saveOption(){
      const selectElement = document.getElementById('select') as HTMLSelectElement;
      this.selectedOption = selectElement.value;
    }

    onSubmit() {
      reviews.push(
        {id:this.id,
         username:this.name!,
         rating: this.rate,
         review: this.review!,
         bookId: this.bookId}
        );
      console.log(reviews)
      // console.log('Name:', this.name);
      // console.log('Rating:', this.rate);
      // console.log('Review:', this.review);
    }
}
