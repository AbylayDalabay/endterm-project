import { Game } from "./game";
import { User } from "./user";

export interface UserList{
        name: string;
        user: User;
        games: Game[];
}