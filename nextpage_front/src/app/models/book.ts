import { Category } from "./category";

export class Book {
        title: string;
        authors : string[];
        categories: Category[];
        img: string;
        description: string;

        constructor(title: string, authors: string[], categories: Category[], img: string, description: string) {
                this.title = title;
                this.authors = authors;
                this.categories = categories;
                this.img = img;
                this.description = description;
        }
}