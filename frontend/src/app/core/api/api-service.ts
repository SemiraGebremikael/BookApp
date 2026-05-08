import { Injectable } from '@angular/core';
import { BookDto } from '../models/books/book.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    private baseUrl = 'https://localhost:7161/api';
    constructor(private http: HttpClient) {}

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
  
}
