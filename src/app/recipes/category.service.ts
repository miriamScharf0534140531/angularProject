import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURL="http://localhost:5113/Recipe/categories";
  constructor(private _http: HttpClient) { }
  getCategories(){
    return this._http.get<number[]>(`${this.apiURL}`);
  }
}
