import { Game } from "./game";

export class Rating {
        count : number;
        sum: number;
        game: Game;
        constructor(count: number,  sum: number, game:Game){
            this.count = count;
            this.sum = sum;
            this.game= game;
        }
}