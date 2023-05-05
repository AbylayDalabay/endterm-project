import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { UserList } from '../models/userlist';
import { Book } from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private client: HttpClient) { }
  
  getUsersLists(): Observable<UserList[]>{
    return this.client.get<UserList[]>(`${this.BASE_URL}/list`)
  }

  getBooksOfList(name: string): Observable<Book[]>{
    return this.client.get<Book[]>(`${this.BASE_URL}/list/${name}/books`)
  }


  
}
