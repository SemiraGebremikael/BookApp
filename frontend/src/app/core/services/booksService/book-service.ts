
import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private api: ApiService) {}

  // getAllBooks() {
  //   return this.api.get('books');
  // }

  getBookById(id: number) :Observable<any> {
    return this.api.get<any>(`books/${id}`);
  }

  // createBook(data: any) {
  //   return this.api.post('books', data);
  // }

  // updateBook(id: number, data: any) {
  //   return this.api.put(`books/${id}`, data);
  // }

  // deleteBook(id: number) {
  //   return this.api.delete(`books/${id}`);
  // }
}