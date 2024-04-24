import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../models/review';
import { Observable } from 'rxjs';
import { Rating } from '../models/rating';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private client: HttpClient) { }
  
  getReviews(id_game: number): Observable<Review[]>{
    return this.client.get<Review[]>(`${this.BASE_URL}/games/${id_game}/reviews`)
  }
  getUser(){
    return this.client.get(`${this.BASE_URL}/current_user/`)
  }
  postReview(review: string,rating:number, id_game: number, user_id: number){
    return this.client.post<Review>(`${this.BASE_URL}/games/${id_game}/reviews`,{
      review: review,rating:rating, user : user_id, game: id_game
    }).subscribe();
  } 
  getRating(id_game: number){
    return this.client.get<Rating>(`${this.BASE_URL}/games/${id_game}/rating`)
  }
}
