import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from './core/services/authService/auth-services';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
  protected readonly isLoggedIn = signal(false);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.isLoggedIn.set(this.authService.isLoggedIn());

    this.router.events.subscribe(() => {
      this.isLoggedIn.set(this.authService.isLoggedIn());
    });

    window.addEventListener('storage', () => {
      this.isLoggedIn.set(this.authService.isLoggedIn());
    });
  }

  protected logout() {
    this.authService.logout();
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }
}
