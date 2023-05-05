import { Component, OnInit } from '@angular/core';

import { Review, reviews } from '../models/review';
import { Book } from '../models/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { ReviewService } from '../services/review.service';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { ReviewComponent } from '../review/review.component';
@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit{

    rate : number = 0;
    rating: number = 0;
    selectedOption: string | undefined;
    add = false;
    name: string | undefined = "Nurkhan";
    review: string | undefined;
    id: number = 0;
    books : Book[] = []
    book : Book
    userId : number = 0
    reviews: Review[] = []
    constructor(private route: ActivatedRoute, private bookService: BookService, private reviewService: ReviewService,private userService: UsersService){
      //   this.myButton = document.getElementById('show')!;
      //   this.myButton.onclick = this.handleClick.bind(this);
      this.book = {} as Book
    }
    ngOnInit(): void{
      const ratingItemsList = document.querySelectorAll('.rating_item');
      const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
      ratingItemsArray.forEach(item => item.parentNode.dataset.totalValue = this.rate)
      this.route.paramMap.subscribe((params) => {
        this.id = Number(params.get('id'));
        this.getCurrentRating();
        this.getReviews(this.id);
      })
    }
    getReviews(id: number){
      this.reviewService.getReviews(id).subscribe((review) => this.reviews = review);
    }
    getCurrentRating(){
        this.reviewService.getRating(this.id).subscribe((rating) => {this.rating = Math.round(rating.sum / rating.count * 100) / 100 * 20; this.Star(this.rating)});
    }
    updateRating(){
      this.reviewService.getRating(this.id).subscribe((rating) => {this.rating = Math.round((rating.sum + this.rate) / (rating.count + 1) * 100) / 100 * 100 / 5; this.Star(this.rating)});
      if (this.rating == 0){
        this.rating = this.rate * 20;
        this.Star(this.rating);
      }
      
    }
    getBook(id:number){
      this.bookService.getBookById(id).subscribe((book) => {this.book = book;
      console.log(this.book.title)});
      // console.log(this.book.id)

    }
    Star(rating: number){
      const myStar = document.getElementById('rating_item_part');
      myStar!.style.background = `linear-gradient(to right,yellow ${rating}%, transparent 10%)`;
      myStar!.style.webkitBackgroundClip = 'text';
      myStar!.style.webkitTextFillColor = 'transparent';
    }
    changeRate(rate:number){
        this.rate = rate;
        const ratingItemsList = document.querySelectorAll('.rating_item');
        const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
        ratingItemsArray.forEach(item => item.parentNode.dataset.totalValue = this.rate)
    }
    saveOption(){
      const selectElement = document.getElementById('select') as HTMLSelectElement;
      this.selectedOption = selectElement.value;
    }

    onSubmit() {
      this.userService.logged().subscribe((user) => {this.reviewService.postReview(this.review!,this.rate,this.id,user.id);this.reviews.push({
        id: user.id,
        user: user,
        user_name: user.username,
        rating: this.rate,
        review: this.review!,
        book: this.book});
        this.updateRating();
        })
      // reviews.push(
      //   {id:this.id,
      //    username:this.name!,
      //    rating: this.rate,
      //    review: this.review!,
      //    book: this.id}
      //   );
      // console.log(reviews)
      // console.log('Name:', this.name);
      // console.log('Rating:', this.rate);
      // console.log('Review:', this.review);
    }
}
