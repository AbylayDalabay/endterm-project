import { Book } from "./book";
import { User } from "./user";

// export class Category{
//         name: string;
//         creator: User;
//         books : Book[];

//         constructor(name: string, creator: User){
//                 this.name = name;
//                 this.creator = creator;
//                 this.books = [];
//         }
// }

export interface Category{
        id: number;
        name: string;

}

export const categories = [
        {
                id: 1,
                name: "Novel"
        },
        {
                id: 2,
                name: "Comedy"
        },
        {
                id: 1,
                name: "History"
        }
]


// export class CatalogInfo{
//         category: Category = {
//           id: 0,
//           name: "unerfined"
//         };
//         books: Book[] = [];
      
// }

export interface Catalog {
        id: number;
        name: string; // name of catalog(favorites, read)
        userId: number;
}

export interface BookCatalogList{
        id: number;
        userId: number;
        catalogId: number;
        bookId: number; 
}

export const CATALOG_LISTS: Catalog[] = [
        { id: 0, name: 'Read', userId: 1 },
        { id: 1, name: 'Favorites', userId: 1 },
        { id: 2, name: 'Want to Read', userId: 1 },
        { id: 3, name: 'Abandoned', userId: 1 },
        { id: 4, name: 'Planned', userId: 1 },
        { id: 5, name: 'Reading', userId: 1 },
];

