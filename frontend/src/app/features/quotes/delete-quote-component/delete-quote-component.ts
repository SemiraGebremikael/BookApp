import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService } from '../../../core/services/quotesService/quote-service';

@Component({
  selector: 'app-delete-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-quote-component.html',
})
export class DeleteQuoteComponent {
  @Input() quoteId!: number;
  @Input() quoteText = '';
  @Output() deleted = new EventEmitter<number>();

  isDeleting = false;
  errorMessage = '';

  constructor(private quoteService: QuoteService) {}

  remove() {
    if (!confirm(`Är du säker att du vill radera “${this.quoteText}”?`)) {
      return;
    }

    this.isDeleting = true;
    this.errorMessage = '';

    this.quoteService.deleteQuote(this.quoteId).subscribe({
      next: () => {
        this.isDeleting = false;
        this.deleted.emit(this.quoteId);
      },
      error: (error: unknown) => {
        console.error(error);
        this.errorMessage = 'Fel vid radering av citat';
        this.isDeleting = false;
      },
    });
  }
}

