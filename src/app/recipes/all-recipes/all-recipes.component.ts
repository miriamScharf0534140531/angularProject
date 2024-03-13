import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../../../classes/recipe';

@Component({
  selector: 'app-all-recipes',
  // standalone: true,
  // imports: [],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit{
  recipes: Recipe[];
  constructor(private recipeService: RecipesService) { }
  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe({
          next: (res) => {
            this.recipes = res
            // console.log(this.recipes)
          },
          error: (err) => {
            
            console.log(err);
          }
        })
  }

}
