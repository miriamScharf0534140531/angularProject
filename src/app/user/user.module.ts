import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './user-service/users.service';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,UserRoutingModule
  ],
  providers:[UsersService],
  //  exports:[LoginComponent,RegisterComponent]
})
export class UserModule { }


 
