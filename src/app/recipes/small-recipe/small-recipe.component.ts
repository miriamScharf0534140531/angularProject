import { Component, Input } from '@angular/core';
import { Recipe } from '../../../classes/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.css'
})
export class SmallRecipeComponent {
  constructor(private _router: Router){}
  @Input()
  recipein!: Recipe;
  
  showDetails(){
    this._router.navigate(["recipe/detailes", this.recipein?.id])
  }
}
