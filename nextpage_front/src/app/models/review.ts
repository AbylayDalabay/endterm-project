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
export var reviews = [
        {
                id: 1,
                username: "yerkennz", 
                rating: 3,
                review: "As I've said before, I'm not really a big fan of dystopia,but I can see why this book is so popular - the dystopic world is really well constructed and everything appears to be thought of to the point where it is weirdly realistic? Yeah it's cool, I enjoyed it",
                bookId: 1,
        },
        {
                id: 2,
                username: "yerkenz", 
                rating: 4,
                review: "asdsadads",
                bookId: 1,
        }
]