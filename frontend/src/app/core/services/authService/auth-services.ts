import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from '../../models/auth/register.dto';
import { LoginDto } from '../../models/auth/LoginDto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl =
    'https://localhost:7161/api/auth';

  constructor(private http: HttpClient) {}

  register(data: RegisterDto) {
      return this.http.post(  `${this.apiUrl}/register`, data
    );
  }

  login(data: LoginDto) {
    return this.http.post<{ token: string }>( `${this.apiUrl}/login`, data
    );
  }


  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}