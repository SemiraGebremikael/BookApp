
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../core/services/booksService/book-service';
import { Router, RouterOutlet } from '@angular/router';
import { BookDto } from '../../../core/models/books/book.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './book-list-component.html',
})
export class BookListComponent implements OnInit {
  books: BookDto[] = [];

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks()
      .subscribe(data => this.books = data);
  }

  delete(id: number) {
    this.bookService.deleteBook(id)
      .subscribe(() => this.loadBooks());
  }

  edit(id: number) {
    this.router.navigate(['/books/edit', id]);
  }

  create() {
    this.router.navigate(['/books/new']);
  }

}