import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../classes/user';
import { UsersService } from '../user-service/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  //  nameLocal:any;
  //  u = sessionStorage.getItem("user");
  // if (u) {
  //   const us = JSON.parse(u);
  //   this.nameLocal = us.name;
  // }

  public registerUser: User;

  constructor(private _usersService: UsersService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    // if (sessionStorage.getItem("user") != null) {
    //   this.nameLocal = sessionStorage.getItem("user")
    //     console.log(this.nameLocal);
    // }
    this.route.params.subscribe(params => {
      this.registerUser = new User();
      this.registerUser.name = params["name"];
      console.log('the value I sended: ', this.registerUser);
    });

    this.registerForm = new FormGroup({
      "id": new FormControl(this.registerUser?.id, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      "name": new FormControl(this.registerUser.name, [Validators.required]),
      "mail": new FormControl(this.registerUser?.mail, [Validators.required, Validators.email]),
      "address": new FormControl(this.registerUser?.address, [Validators.required]),
      "password": new FormControl(this.registerUser?.password, [Validators.required, Validators.minLength(4)])
    })
  }

  registerLogin() {
    let x = 6;
    this._usersService.getUserByName(this.registerUser.name).subscribe({
      next: (res) => {
        console.log("res",res);
        if (res == null)
        this._usersService.addUserToServer(this.registerUser).subscribe(() => {
      alert("התוסף בהצלחה")
          this.router.navigate(['/recipe'])
        }
        )
        else alert("המשתמש כבר קיים")
      }
    }), err => console.log(err);
  
    
  }

}
