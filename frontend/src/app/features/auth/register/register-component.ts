import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterDto } from '../../../core/models/auth/register.dto';
import { AuthService } from '../../../core/services/authService/auth-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.scss',
})
export class RegisterComponent {

  model: RegisterDto = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {

    this.authService.register(this.model)
      .subscribe({

        next: () => {

          alert('User created');

          this.router.navigate(['/login']);
        },

        error: (error) => {
          console.log(error);
        }
      });
  }
}



