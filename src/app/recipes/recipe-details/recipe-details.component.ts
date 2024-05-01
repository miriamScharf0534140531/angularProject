import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../../../classes/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit{
constructor(private _recipeService:RecipesService,private _route: ActivatedRoute){}
    recipe:Recipe;
    id:number=0;
    countArray(n: number): any[] {
      return Array(n);
    }
    public currentUser!:string

    ngOnInit(): void {
      // this.currentUser=sessionStorage.getItem('name')!;
      console.log("local",this.currentUser);
      this._route.params.subscribe(params => {
        this.recipe =new Recipe() ;
        console.log("params:",params);
        this.id=params["id"];
      });
      this._recipeService.getRecipeById(this.id).subscribe({
        next: (res) => {
          this.recipe = res
            console.log("this.recipe",this.recipe)
        },
        error: (err) => {        
          console.log(err);
        }
      })
  }
  // updateRecipe(){}
}
