import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit{

  categories: Category[] = [];

  ngOnInit(): void {
      
  }

}
