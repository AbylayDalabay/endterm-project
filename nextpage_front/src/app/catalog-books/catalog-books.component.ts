import { Component } from '@angular/core';
import { Category } from '../models/category';
import { books } from '../models/book';

@Component({
  selector: 'app-catalog-books',
  templateUrl: './catalog-books.component.html',
  styleUrls: ['./catalog-books.component.css']
})
export class CatalogBooksComponent {
  category : Category = {
    id : 1, 
    name: 'Novel'
  };

  booklist = books;
}
