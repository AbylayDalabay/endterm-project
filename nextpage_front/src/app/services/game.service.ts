import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private client: HttpClient) { }
  
  getGames(): Observable<Game[]>{
    return this.client.get<Game[]>(`${this.BASE_URL}/books`)
  }
  getFindGames(query: string): Observable<Game[]> {
    return this.client.get<Game[]>(`${this.BASE_URL}/search/${query}/`);
  }
  getGamesByCategory(category_id: Number): Observable<Game[]>{
    return this.client.get<Game[]>(`${this.BASE_URL}/categories/${category_id}/books`)
  }
  getRandomGames(): Observable<Game[]>{
    return this.client.get<Game[]>(`${this.BASE_URL}/books/popular`)
  }
  getGameById(id: number): Observable<Game>{
    return this.client.get<Game>(`${this.BASE_URL}/books/${id}/`)
  }
}
