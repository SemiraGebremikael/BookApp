import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../../core/services/booksService/book-service';
import { BookDto } from '../../../core/models/books/book.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-book-component.html',
})
export class CreateBookComponent {
  book: Partial<BookDto> = {
    title: '',
    author: '',
    publishDate: ''
  };

  isLoading = false;
  message = '';
  todayDate = new Date().toISOString().split('T')[0];

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  submit() {
    if (!this.book.title || !this.book.author || !this.book.publishDate) {
      this.message = 'Vänligen fyll i alla fält';
      return;
    }

    this.isLoading = true;
    this.bookService.createBook(this.book as BookDto)
      .subscribe({
        next: () => {
          this.message = 'Bok skapad framgångsrikt!';
          this.isLoading = false;
          setTimeout(() => {
            this.router.navigate(['/books']);
          }, 500);
        },
        error: (error) => {
          console.error(error);
          this.message = 'Fel vid skapande av bok';
          this.isLoading = false;
        }
      });
  }

  cancel() {
    this.router.navigate(['/books']);
  }
}
