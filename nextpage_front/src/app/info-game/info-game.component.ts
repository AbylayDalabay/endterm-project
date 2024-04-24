import { Component } from '@angular/core';
import { Game, games } from '../models/game';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { UserlistService } from '../services/userlist.service';
@Component({
  selector: 'app-info-game',
  templateUrl: './info-game.component.html',
  styleUrls: ['./info-game.component.css']
})
export class InfoGameComponent {
    check = false;
    id : number | undefined;
    fullDes: string = ''
    game!:Game;
    home = false;
    appear = false;
    constructor(private route: ActivatedRoute, private gameService:GameService, private userList: UserlistService){
       this.game = {} as Game
    }

    ngOnInit(): void{
      this.route.paramMap.subscribe((params) => {
        const id = Number(params.get('id'));
        if (id != 0){
          this.getBook(id);
        }
        if (id == 0){
          // this.home = true;
          this.userList.getGameOfList('Reading').subscribe((books) => {
            if(books != undefined && books.length != 0){
                this.game = books[0];
                this.getInfo(this.game.description);
                this.changeDes();
            }
          })
        }
        console.log(this.game);
      })
    }
    getBook(id:number){
      this.gameService.getGameById(id).subscribe((game:any) => {this.game = game;
      this.getInfo(this.game.description);});
    }
    getHome(){
      
    }
    getInfo(description:string): void{
      this.fullDes = description;
      if (description.length >= 328){
        this.appear = true;
        this.check = true;
        this.changeDes();
        // this.check = true;
      }
    }
    checkSize(){
        if (this.game.description.length < 328){
            this.appear = false;
        }
        else{
          this.appear = true;
        }
    }
    changeDes(){
      if (this.check == true){
        this.game.description = this.fullDes
      }
      else{
        this.game.description = this.fullDes.substring(0,328)
        let words = this.game.description.split(' ');
        words.pop()
        this.game.description = words.join(" ");
      }
      this.check = !this.check
    }
}
