import { Component, Input } from '@angular/core';
import { Book, books } from '../models/book';
import { Category } from '../models/category';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  @Input() catalog_name: string;

  // catalog_name = "Current catalg" ;//input
  list_book = books;

  constructor() {
    this.catalog_name = '';
    
  }
  

}
