import { Injectable } from '@angular/core';
import { BookDto } from '../models/books/book.dto';
import { HttpClient } from '@angular/common/http';
import { CreateQuoteDto, QuoteDto, UpdateQuoteDto } from '../models/quotes/quote.dto';
import { RegisterDto } from '../models/auth/register.dto';
import { LoginDto } from '../models/auth/LoginDto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://localhost:7161/api';
  private apiUrl =  'https://localhost:7161/api/auth';

  constructor(private http: HttpClient) {}

  register(data: RegisterDto) {
      return this.http.post(  `${this.apiUrl}/register`, data
    );
  }

  login(data: LoginDto) {
    return this.http.post<{ token: string }>( `${this.apiUrl}/login`, data
    );
  }


  getBooks() {
    return this.http.get<BookDto[]>(`${this.baseUrl}/books`);
  }

  getBookById(id: number) {
    return this.http.get<BookDto>(`${this.baseUrl}/books/${id}`);
  }

  createBook(data: BookDto) {
    return this.http.post<BookDto>(`${this.baseUrl}/books`, data);
  }

  updateBook(id: number, data: BookDto) {
    return this.http.put<BookDto>(`${this.baseUrl}/books/${id}`, data);
  }

  deleteBook(id: number) {
    return this.http.delete(`${this.baseUrl}/books/${id}`);
  }
  


  getAllQuotes() {
    const data =  this.http.get<QuoteDto[]>(`${this.baseUrl}/quotes`);
    console.log(data);
    return data;
  }

  createQuote(dto: CreateQuoteDto) {
    return this.http.post<QuoteDto>(`${this.baseUrl}/quotes`, dto);
  }

  updateQuote(id: number, dto: UpdateQuoteDto) {
    return this.http.put<QuoteDto>(`${this.baseUrl}/quotes/${id}`, dto);
  }

  deleteQuote(id: number) {
    return this.http.delete(`${this.baseUrl}/quotes/${id}`);
    }

}
