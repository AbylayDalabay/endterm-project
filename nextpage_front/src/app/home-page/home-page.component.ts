import { Component } from '@angular/core';
import { Game } from '../models/game'
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { UserList } from '../models/userlist';
import { UserlistService } from '../services/userlist.service';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
    game : Game | undefined;
    id: number | undefined;
    list : Game[] = [];
    user : User | undefined;
    popular: Game[] = [];
    recommendations: Game[] = [];
    constructor(private route: ActivatedRoute, private gameService:GameService, private userList: UserlistService, private userService: UsersService){
        
    }
    ngOnInit(): void{
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.userList.getGameOfList('Reading').subscribe((games) => {
        if(games.length > 0){
          this.game = games[0]
        }
      }
      );
      this.getPopular();
      this.getReco();
    }
    getCur(){
      this.userList.getGameOfList('Reading').subscribe((games) => {
        if(games != undefined && games.length != 0){
            this.game = games[0];
            console.log(this.game)
        }
      })
    }
    getPopular(){
      this.gameService.getRandomGames().subscribe((pop:any) => this.popular = pop);
    }
    getReco(){
      this.gameService.getRandomGames().subscribe((pop:any) => this.recommendations = pop);
    }
}
