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
