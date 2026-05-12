import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ThemeToggleComponent } from '../../features/theme/theme-toggle.component';
import { AuthService } from '../services/authService/auth-services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, ThemeToggleComponent],
  templateUrl: './navbar-component.html',
  styleUrls: ['./navbar-component.scss'],
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


refreshPage() {

  if (this.authService.isLoggedIn()) {
    this.router.navigate(['/books']);
  } else {
    this.router.navigate(['/login']);
  }
}

}

