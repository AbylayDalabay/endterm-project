import { Component } from '@angular/core';
import { Category, CATALOG_LISTS } from '../models/category';
import { Book } from '../models/book';
@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.css']
})


export class MyBookComponent {
  catalog_list = CATALOG_LISTS;

}


