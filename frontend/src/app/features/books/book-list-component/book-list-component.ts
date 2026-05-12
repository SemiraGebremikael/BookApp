
import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../../../core/services/booksService/book-service';
import { Router } from '@angular/router';
import { BookDto } from '../../../core/models/books/book.dto';
import { CommonModule } from '@angular/common';
import { DeleteBookComponent } from '../delete-book-component/delete-book-component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, DeleteBookComponent],

  templateUrl: './book-list-component.html',
})
export class BookListComponent implements OnInit {
  books: BookDto[] = [];
  message = '';
  
  private bookService = inject(BookService);
  private router = inject(Router);  


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

  handleDelete(id: number) {
    this.message = 'Bok raderad framgångsrikt!';
    this.loadBooks();
  }

  edit(id: number) {
    this.router.navigate(['/books/edit', id]);
  }

  create() {
    this.router.navigate(['/books/new']);
  }

}