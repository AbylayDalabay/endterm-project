import {Component, Input} from '@angular/core';
import {Review} from "../models/review";
import { reviews } from '../models/review';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  review: string | undefined;
  profile: string | undefined;
  rating: number | undefined;
  @Input()bookId: number | undefined;
  myList = reviews;
  ngOnInit(): void{
    this.myList = reviews.filter((book) => book.bookId == this.bookId);
    // alert(this.selectedOption)
    // const selectElement = document.getElementById('select') as HTMLSelectElement;
    // this.selectedOption = selectElement.value;
  }
  mylist = reviews;
}
