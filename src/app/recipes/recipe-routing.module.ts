import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';


const RECIPES_ROUTES: Routes = [
  { path: '', redirectTo: 'all-recipe', pathMatch: 'full' },
  {path:"all-recipe",component:AllRecipesComponent},
  { path: "detailes/:id", component:RecipeDetailsComponent },
  { path: "addRecipe", component:AddRecipeComponent },


]

@NgModule({
  imports:[RouterModule.forChild(RECIPES_ROUTES),CommonModule],
  exports:[RouterModule]
})
export class RecipeRoutingModule { }
