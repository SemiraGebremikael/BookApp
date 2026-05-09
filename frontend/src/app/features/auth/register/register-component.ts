import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterDto } from '../../../core/models/auth/register.dto';
import { AuthService } from '../../../core/services/authService/auth-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.scss',
})
export class RegisterComponent {

  model: RegisterDto = {
    name: '',
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

          alert('Account created');

          this.router.navigate(['/login']);
        },

        error: () => {
          alert('Something went wrong');
        }
      });
  }
}

