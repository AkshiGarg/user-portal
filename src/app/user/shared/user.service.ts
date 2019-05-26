import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = 'http://localhost:8080'; 
  
  constructor(private _httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this._httpClient.get<User[]>(this.url + '/users');
  }

  createUser(user:User): Observable<User> {
    console.log(this.url + '/user');
    return this._httpClient.post<User>(this.url + '/user', user);
  }

}
