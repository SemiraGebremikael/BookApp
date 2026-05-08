
import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api-service';
import { BookDto } from '../../models/books/book.dto';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private api: ApiService) {}

  getAllBooks() {
    return this.api.getBooks();
  }

  getBookById(id: number) {
    return this.api.getBookById(id);
  }

  createBook(data: BookDto) {
    return this.api.createBook(data);
  }

  updateBook(id: number, data: BookDto) {
    return this.api.updateBook(id, data);
  }

  deleteBook(id: number) {
    return this.api.deleteBook(id);
  }

}