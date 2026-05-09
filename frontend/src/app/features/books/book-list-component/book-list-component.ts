
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
  message = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getAllBooks()
      .subscribe({
        next: (data) => {
          this.books = data;
          this.message = '';
        },
        error: (error) => {
          console.error(error);
          this.message = 'Fel vid hämtning av böcker';
        }
      });
  }

  delete(id: number) {
    if (confirm('Är du säker på att du vill radera denna bok?')) {
      this.bookService.deleteBook(id)
        .subscribe({
          next: () => {
            this.message = 'Bok raderad framgångsrikt!';
            this.loadBooks();
          },
          error: (error) => {
            console.error(error);
            this.message = 'Fel vid radering av bok';
          }
        });
    }
  }

  edit(id: number) {
    this.router.navigate(['/books/edit', id]);
  }

  create() {
    this.router.navigate(['/books/new']);
  }

}