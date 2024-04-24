import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { Game } from '../models/game';
import {ActivatedRoute} from "@angular/router";
import { GameService } from '../services/game.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-catalog-games',
  templateUrl: './catalog-games.component.html',
  styleUrls: ['./catalog-games.component.css']
})
export class CatalogGamesComponent implements OnInit{

  category: Category;
  gameList!: Game[];
  loaded: boolean;

  constructor(private route: ActivatedRoute, private gameService: GameService, private categoryService: CategoryService) {
    this.gameList = [] as Game[];
    this.loaded = true;
    this.category = {} as Category;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const category_id = Number(params.get('id'));
      this.loaded = false;
      this.getCategory(category_id);
      this.getBooksByCategory(category_id);
      this.loaded = true;
    })
  }
  getCategory(category_id: number) {
    this.categoryService.getCategory(category_id).subscribe((category) =>{
      this.category = category;
      this.loaded = true;
    },
    // (error) => {
    //   console.log(error);
    //   this.loaded = false;
    //   this.category.error("failed posting");
    // }
    );
  }
  getBooksByCategory(category_id: number) {
    this.gameService.getGamesByCategory(category_id).subscribe((games) => {
      this.gameList = games;
    });
  }
}
