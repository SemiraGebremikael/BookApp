import { Injectable } from '@angular/core';
import { BookDto } from '../models/books/book.dto';
import { HttpClient } from '@angular/common/http';
import { CreateQuoteDto, QuoteDto, UpdateQuoteDto } from '../models/quotes/quote.dto';
import { RegisterDto } from '../models/auth/register.dto';
import { LoginDto } from '../models/auth/LoginDto';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private baseUrl = 'https://localhost:7161/api';
  // private apiUrl =  'https://localhost:7161/api/auth';

  constructor(private http: HttpClient) {}

  register(data: RegisterDto) {
      return this.http.post(  `${environment.apiUrl}/register`, data
    );
  }

  login(data: LoginDto) {
    return this.http.post<{ token: string }>( `${environment.apiUrl}/login`, data
    );
  }


  getBooks() {
    return this.http.get<BookDto[]>(`${environment.apiUrl}/books`);
  }

  getBookById(id: number) {
    return this.http.get<BookDto>(`${environment.apiUrl}/books/${id}`);
  }

  createBook(data: BookDto) {
    return this.http.post<BookDto>(`${environment.apiUrl}/books`, data);
  }

  updateBook(id: number, data: BookDto) {
    return this.http.put<BookDto>(`${environment.apiUrl}/books/${id}`, data);
  }

  deleteBook(id: number) {
    return this.http.delete(`${environment.apiUrl}/books/${id}`);
  }
  


  getAllQuotes() {
    const data =  this.http.get<QuoteDto[]>(`${environment.apiUrl}/quotes`);
    console.log(data);
    return data;
  }

  createQuote(dto: CreateQuoteDto) {
    return this.http.post<QuoteDto>(`${environment.apiUrl}/quotes`, dto);
  }

  updateQuote(id: number, dto: UpdateQuoteDto) {
    return this.http.put<QuoteDto>(`${environment.apiUrl}/quotes/${id}`, dto);
  }

  deleteQuote(id: number) {
    return this.http.delete(`${environment.apiUrl}/quotes/${id}`);
    }

}
