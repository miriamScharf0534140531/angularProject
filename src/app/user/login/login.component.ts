import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../user-service/users.service';
import { User } from '../../../classes/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public userLogin = new User();
  constructor(private _usersService: UsersService, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "name": new FormControl(this.userLogin.name, [Validators.required]),
      "password": new FormControl(this.userLogin.password, [Validators.required, Validators.minLength(4)])
    })
  }
 

  login() {
    this.userLogin = this.loginForm.value;
    console.log(this.userLogin);
    this._usersService.getUserByName(this.userLogin.name).subscribe({
      next: (res) => {
        console.log(res);
        if(res){
        if (res.password != this.userLogin.password)
          alert("invalid password!!")
        else {
            console.log("good!!!");
            this.router.navigate(['/recipe'])
        }}
        else{
          // localStorage.setItem("user", JSON.stringify(this.userLogin))
          localStorage.setItem("name", this.userLogin.name) 
          localStorage.setItem("password", this.userLogin.password) 
          this.router.navigate(['/user/register',this.userLogin])
        }
      }
    }), err => console.log(err);
  
  }
  //////
  // loginUser() {
  //   this.user = this.loginForm.value;

  //   this._userService.getUsersFromServer().subscribe((data) => {
  //     let currentUser = data.find(x => x.userName == this.user.userName)
  //     console.log(currentUser);
  //     if (currentUser) {
  //       if (currentUser?.password != this.user.password)
  //         alert("wrong password!")
  //       else {
  //         Swal.fire({
  //           title: `Welcome! ${this.user.userName}`,
  //           text: "You've logged in successfully!",
  //           icon: "success"
  //         });
  //         localStorage.setItem("user", JSON.stringify(currentUser))
  //         this.router.navigate(['/course'])
  //       }
  //     }
  //     else {
  //       localStorage.setItem("user", JSON.stringify(this.user))
  //       this.router.navigate(['/user/register', { user: this.user.userName }])
  //     }

  //   }, err => console.log(err))
  // }
  //////
}
