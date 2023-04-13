import { Book } from "./book";
import { User } from "./user";

export class Review {
        review : string;
        user: User;
        book: Book;

        constructor (review: string, user: User, book: Book){
                this.review = review;
                this.user = user;
                this.book = book;
        }
}