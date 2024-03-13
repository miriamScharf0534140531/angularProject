import { Routes } from '@angular/router';

export const routes: Routes = [
     { path: '', redirectTo: 'user', pathMatch: 'full' },
     { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
     { path: 'recipe', loadChildren: () => import('./recipes/recipe.module').then(m => m.RecipeModule)},
    // { path: '**', component:  }
];
