import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Recipe } from '../../../classes/recipe';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit {
  addRecipeForm: FormGroup;
  categoryList: any[];
  recipeEdit = new Recipe();
  constructor(private _categoryService: CategoryService,private router: Router,private _recipesService:RecipesService, private _formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this._categoryService.getCategories().subscribe({
      next: (res) => {
        this.categoryList = res;
        console.log(this.categoryList)
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.addRecipeForm = new FormGroup({
      // "id": new FormControl("", [Validators.required]),
      "recipName": new FormControl("", [Validators.required]),//
      "preparationTime": new FormControl("", [Validators.required]),//
      "categoryId": new FormControl("1"),//
      "listComponent": this._formBuilder.array([this._formBuilder.control('')]),//
      "preparationMethod": this._formBuilder.array([this._formBuilder.control('')]),//
      "levelDifficulty": new FormControl("", [Validators.required]),//להוסיף בדיקת תקינות שזה בין 1-5
      // "dateAdded": new FormControl(this.recipeEdit.dateAdded, [Validators.required]),
      "userId": new FormControl("", [Validators.required]),
      "picture": new FormControl("", [Validators.required])
    })
  }
  get listComponentArray() {
    return this.addRecipeForm.get('listComponent') as FormArray;
  }
  get preparationMethodArray() {
    return this.addRecipeForm.get('preparationMethod') as FormArray;
  }
  removeEmptyproducts() {
    for (let i = this.listComponentArray.length - 1; i >= 0; i--) {
      if (this.listComponentArray.at(i).value.trim() === '') {
        this.listComponentArray.removeAt(i);
      }
    }
  }
  removeEmptyPreparationSteps() {
    for (let i = this.preparationMethodArray.length - 1; i >= 0; i--) {
      if (this.preparationMethodArray.at(i).value.trim() === '') {
        this.preparationMethodArray.removeAt(i);
      }
    }
  }
  addProduct() {
    const lastControl = this.listComponentArray.at(this.listComponentArray.length - 1);
    if (lastControl.value.trim() !== '') {
      this.listComponentArray.push(this._formBuilder.control(''));
      console.log(this.listComponentArray);
    }
  }
  addPreparationStep() {
    const lastControl = this.preparationMethodArray.at(
      this.preparationMethodArray.length - 1
    );
    if (lastControl.value.trim() !== '') {
      this.preparationMethodArray.push(this._formBuilder.control(''));
      console.log(this.preparationMethodArray);
    }
  }

  add() {
    // this.recipeEdit.categoryId = this.addRecipeForm.get('selectedCategory').value;
    // console.log(this.addRecipeForm)
    // console.log(this.addRecipeForm.get('categoryId'))
    this.recipeEdit.recipeName=this.addRecipeForm.get('recipName').value;
    this.recipeEdit.preparationTime=this.addRecipeForm.get('preparationTime').value;
    this.recipeEdit.levelDifficulty=this.addRecipeForm.get('levelDifficulty').value;
    this.recipeEdit.userId=this.addRecipeForm.get('userId').value;
    this.recipeEdit.picture=this.addRecipeForm.get('picture').value;
    this.recipeEdit.listComponent = new Array;
    this.listComponentArray.controls.forEach(control => {
      this.recipeEdit.listComponent.push(control.value);
    });
    this.recipeEdit.preparationMethod = new Array;
    this.preparationMethodArray.controls.forEach(control => {
      this.recipeEdit.preparationMethod.push(control.value);
    });
    console.log(this.recipeEdit);
    console.log(this.recipeEdit.recipeName);
    if( this._recipesService.addRecipe(this.recipeEdit)){
      alert("התוסף בהצלחה!!!")
      this.router.navigate(['/recipe/all-recipe'])
    }
    else alert("error")
    
  }
}