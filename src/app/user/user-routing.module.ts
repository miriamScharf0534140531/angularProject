import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const USER_ROUTES: Routes = [
  { path: "login", component:LoginComponent },
  { path: "register", component:RegisterComponent },
]

@NgModule({
  imports:[RouterModule.forChild(USER_ROUTES)],
  exports:[RouterModule]
})
export class UserRoutingModule { }
