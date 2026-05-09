
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginDto } from '../../../core/models/auth/LoginDto';
import { AuthService } from '../../../core/services/authService/auth-services';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [FormsModule,RouterLink, FormsModule,CommonModule,],
  templateUrl: './login-component.html',

})
export class LoginComponent {

  model: LoginDto = {
    name: '',
    password: ''
  };

  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

 login() {

  console.log(this.model);

  this.authService.login(this.model)
    .subscribe({
      next: (response) => {

        console.log(response);

        localStorage.setItem(
          'token',
          response.token
        );

        this.message = 'Login successful!';
        this.router.navigate(['/books']);
      },

      error: (error) => {
        console.log(error);
        this.message = 'Login failed: ' + (error.error?.message || 'Invalid username or password');
      }
    });
}


}