import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from "./features/books/book-list-component/book-list-component";
import { LoginComponent } from "./features/auth/login/login-component";
import { RegisterComponent } from "./features/auth/register/register-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookListComponent, LoginComponent, RegisterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
