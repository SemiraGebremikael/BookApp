
import { Component } from '@angular/core';
import { BookService } from '../../../core/services/booksService/book-service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './book-list-component.html',
})
export class BookListComponent {

  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks()
      .subscribe({
        next: (response: any) => {
          this.books = response;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
  }
}