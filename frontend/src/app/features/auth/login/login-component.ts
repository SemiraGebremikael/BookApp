
import { Component, inject } from '@angular/core';
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

  private authService = inject(AuthService);
  private router = inject(Router);  


login() {
  this.authService.login(this.model)
    .subscribe({
      next: (response) => {
        localStorage.setItem(
          'token',
          response.token
        );
        this.message = 'Login successful!';
        this.router.navigate(['/books']);
      },
      error: (error) => {
        this.message = 'Login failed: ' + (error.error?.message || 'Invalid username or password');
      }
    });
}


}