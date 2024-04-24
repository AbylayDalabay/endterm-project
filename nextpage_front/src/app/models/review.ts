import { Game } from "./game";
import { User } from "./user";

export class Review {
        id: number;
        review : string;
        user: User;
        game: Game;
        user_name: string;
        rating: number;
        constructor (id:number, review: string, user: User, game: Game, user_name: string, rating: number){
                this.id = id;
                this.review = review;
                this.user = user;
                this.game = game;
                this.user_name = user_name;
                this.rating = rating;
        }
}
export const reviews = [
        {
                id: 1,
                username: "yerkennz", 
                rating: 3,
                review: "The game was very hard to play",
                game: 1,
        },
        {
                id: 2,
                username: "yerkenz", 
                rating: 4,
                review: "asdsadads",
                game: 1,
        }
]