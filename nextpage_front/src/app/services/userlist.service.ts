import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { UserList } from '../models/userlist';
import { Game, Game2 } from '../models/game';
@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private client: HttpClient) { }
  
  getUsersLists(): Observable<UserList[]>{
    return this.client.get<UserList[]>(`${this.BASE_URL}/list`)
  }

  getGameOfList(name: string): Observable<Game[]>{
    return this.client.get<Game[]>(`${this.BASE_URL}/list/${name}/books`)
  }

 
  postGameToList(listName:string, game: Game2): Observable<UserList>{
    return this.client.post<UserList>(`${this.BASE_URL}/list/${listName}/books/`, game)
  }
 
  deletetGameFromList(listName: string, game: Game2): Observable<UserList> {
    return this.client.delete<UserList>(`${this.BASE_URL}/list/${listName}/books/`, { body: game, responseType: 'json' });
  }
  getListOfGame(id: number): Observable<UserList[]>{
    return this.client.get<UserList[]>(`${this.BASE_URL}/lists/book/${id}/`)
  }

  
  getGameOfOther(listname:string, user_id: number): Observable<UserList[]>{
    return this.client.get<UserList[]>(`${this.BASE_URL}/list/${listname}/books/${user_id}/`)
  }
  
  

  
}
