import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { User } from '../../../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly apiURL='http://localhost:5113/User';
  constructor(private _http: HttpClient) { }

  getEvents(): Observable<any> {
    return this._http.get(this.apiURL)
  }

  getUserByName(name: string): Observable<any> {
    return this._http.get<User>(`${this.apiURL}/${name}`)
  }

  addUserToServer(user: User | null): Observable<boolean> {
    if (user) {
        return this._http.post<boolean>(this.apiURL,user );
    } else {
        return of(false);
    }
}
}
