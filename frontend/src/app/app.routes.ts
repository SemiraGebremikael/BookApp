import { Routes } from "@angular/router";
import { LoginComponent } from "./features/auth/login/login-component";
import { RegisterComponent } from "./features/auth/register/register-component";
import { BookListComponent } from "./features/books/book-list-component/book-list-component";
import { CreateBookComponent } from "./features/books/create-book-component/create-book-component";
import { EditBookComponent } from "./features/books/edit-book-component/edit-book-component";



export const routes: Routes = [

   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'books',
    component: BookListComponent
  },

  {
    path: 'books/new',
    component: CreateBookComponent
  },

  {
    path: 'books/edit/:id',
    component: EditBookComponent
  }
];