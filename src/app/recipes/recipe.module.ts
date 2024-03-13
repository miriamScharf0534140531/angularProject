import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipesService } from './recipes.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { TimePipe } from './time.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';



@NgModule({
  declarations: [AllRecipesComponent,SmallRecipeComponent,RecipeDetailsComponent,AddRecipeComponent],
  imports: [
    CommonModule,RecipeRoutingModule,TimePipe,FormsModule,ReactiveFormsModule
  ],
  providers:[RecipesService],

})
export class RecipeModule { }
