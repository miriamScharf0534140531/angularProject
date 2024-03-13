import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserModule } from './user/user.module';
import { CommonModule } from '@angular/common';
//  import { LoginComponent } from './user/login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipes';
}
