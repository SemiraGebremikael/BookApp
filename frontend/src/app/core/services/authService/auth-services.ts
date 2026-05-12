import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDto } from '../../models/auth/register.dto';
import { LoginDto } from '../../models/auth/LoginDto';
import { ApiService } from '../../api/api-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService) {}
  

  register(data: RegisterDto) {
      return this.api.register(data);
  }

  login(data: LoginDto) {
    return this.api.login(data);    
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