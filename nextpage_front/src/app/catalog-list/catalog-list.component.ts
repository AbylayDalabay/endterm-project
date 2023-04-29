import { Component, OnInit } from '@angular/core';
import { categories, Category } from '../models/category';
@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit{
  categoryList: Category[] = [];

  ngOnInit(): void {
    this.categoryList = categories; 
  }
  
}
