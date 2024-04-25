import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { Game } from '../models/game';

import { GameService } from '../services/game.service';
import {User} from "../models/user";
import 'jqueryui';
declare var $: any;

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent{
  
    check = false;
    findGame : string = '';
    games : Game[] | undefined;
    // constructor(private gameService: gameService){
    user: User;
    // }
    showBar(){
      this.check = !this.check;
    }
    // addCompany(){
    //   this.gameService.findBook(this.findBook).subscribe((book) => {
    //     if(book.name == this.findBook){

    //     }
    //   })
    // }
  logged = false;
  constructor(private route: Router,private gameService:GameService) {
    // @ts-ignore
    this.user = this.user;

  }
  ngOnInit(): void {
    this.loadUser();
    $('#search').autocomplete({
      source: (request: { term: string; }, response: (arg0: Game[]) => void) => {
        this.gameService.getFindGames(request.term).subscribe(data => {
          response(data.filter((game) => game.title.indexOf(this.findGame) !== -1));
        });
      },
      minLength: 3,
      select: ( ui: { item: { title: string; }; }) => {
        this.findGame = ui.item.title;
      }
    });
  }
  loadUser(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.logged = false;
    this.route.navigate(['/about']);
  }
  search() {
    this.gameService.getFindGames(this.findGame).subscribe((data) => {
      this.games = data;
    });
  }
}