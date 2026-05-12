import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QuoteService } from '../../../core/services/quotesService/quote-service';

@Component({
  selector: 'app-create-quote',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-quote-component.html',
})
export class CreateQuoteComponent {
  quoteText = '';
  isLoading = false;
  message = '';
  showWarning = false;

  private quoteService = inject(QuoteService);
  private router = inject(Router);

  submit() {
    const text = this.quoteText.trim();
    if (!text) {
      this.showWarning = true;
      this.message = '';
      return;
    }
    this.showWarning = false;
    this.isLoading = true;
    this.quoteService.createQuote({ text }).subscribe({
      next: () => {
        this.message = 'Citat skapat!';
        this.isLoading = false;
        setTimeout(() => {
          this.router.navigate(['/quotes']);
        }, 400);
      },
      error: () => {
        this.message = 'Fel vid skapande av citat';
        this.isLoading = false;
      }
    });
  }

  cancel() {
    this.router.navigate(['/quotes']);
  }
}