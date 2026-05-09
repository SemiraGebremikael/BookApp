import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../../core/services/booksService/book-service';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-book-component.html',
})
export class DeleteBookComponent {
  @Input() bookId!: number;
  @Input() bookTitle = '';
  @Output() deleted = new EventEmitter<number>();

  isDeleting = false;
  errorMessage = '';

  constructor(private bookService: BookService) {}

  remove() {
    if (!confirm(`Är du säker på att du vill radera "${this.bookTitle}"?`)) {
      return;
    }

    this.isDeleting = true;
    this.errorMessage = '';

    this.bookService.deleteBook(this.bookId).subscribe({
      next: () => {
        this.isDeleting = false;
        this.deleted.emit(this.bookId);
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = 'Fel vid radering av bok';
        this.isDeleting = false;
      }
    });
  }
}
