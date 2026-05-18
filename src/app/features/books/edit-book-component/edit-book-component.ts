import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../../../core/services/booksService/book-service';
import { BookDto } from '../../../core/models/books/book.dto';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-edit-book',
standalone: true,
imports: [FormsModule, CommonModule],
templateUrl: './edit-book-component.html',
})
export class EditBookComponent implements OnInit {
book: BookDto | null = null;
isLoading = false;
message = '';
bookId: number = 0;
todayDate = new Date().toISOString().split('T')[0];

private bookService = inject(BookService);
private router = inject(Router);  
private route = inject(ActivatedRoute);

ngOnInit() {
this.route.params.subscribe(params => {
    this.bookId = params['id'];
    this.loadBook();
});
}

loadBook() {
this.isLoading = true;
this.bookService.getBookById(this.bookId)
    .subscribe({
    next: (data) => {
        this.book = data;
        // Convert date to the correct format for HTML5 date-input (YYYY-MM-DD)
        if (this.book.publishDate) {
        this.book.publishDate = this.book.publishDate.split('T')[0];
        }
        this.isLoading = false;
    },
    error: (error) => {
        console.error(error);
        this.message = 'Fel vid hämtning av bok';
        this.isLoading = false;
    }
    });
}

submit() {
  if (!this.book || !this.book.title || !this.book.author || !this.book.publishDate) {
    this.message = 'Vänligen fyll i alla fält';
    return;
  }

  this.isLoading = true;

  const updatedBook = {
    ...this.book,
    publishDate: new Date(this.book.publishDate).toISOString()
  };

  console.log(updatedBook);

  this.bookService.updateBook(this.bookId, updatedBook)
    .subscribe({
      next: () => {
        this.message = 'Bok uppdaterad framgångsrikt!';
        this.isLoading = false;

        setTimeout(() => {
          this.router.navigate(['/books']);
        }, 500);
      },
      error: (error) => {
        console.error(error);
        this.message = 'Fel vid uppdatering av bok';
        this.isLoading = false;
      }
    });
}

cancel() {
this.router.navigate(['/books']);
}
}
