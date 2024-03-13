import { Injectable } from '@angular/core';
import { Recipe } from '../../classes/recipe';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private readonly apiURL='http://localhost:5113/Recipe';
  constructor(private _http: HttpClient) { }
  getAllRecipes(){
    return this._http.get<Recipe[]>(`${this.apiURL}`)
  }
  getRecipeById(id:number){
return this._http.get<Recipe>(`${this.apiURL}/${id}`)
  }
  addRecipe(recipe:Recipe | null):Observable<boolean>{
      if(recipe)
      return this._http.post<boolean>(this.apiURL,recipe);
    else return of(false);
  }
}
