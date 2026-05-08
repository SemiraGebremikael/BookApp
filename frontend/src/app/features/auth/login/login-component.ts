
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from '../../../core/models/auth/LoginDto';
import { AuthService } from '../../../core/services/authService/auth-services';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.html',

})
export class LoginComponent {

  model: LoginDto = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    this.authService.login(this.model)
      .subscribe({

        next: (response) => {

          this.authService
            .saveToken(response.token);

          this.router.navigate(['/']);
        },

        error: (error) => {
          console.log(error);
          alert('Wrong username or password');
        }
      });
  }
}