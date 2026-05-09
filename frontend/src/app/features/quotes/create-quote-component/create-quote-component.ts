import { Component } from '@angular/core';
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

  constructor(
    private quoteService: QuoteService,
    private router: Router
  ) {}

  submit() {
    if (!this.quoteText.trim()) {
      this.message = 'Vänligen fyll i citatet';
      return;
    }

    this.isLoading = true;

    this.quoteService
      .createQuote({ text: this.quoteText.trim() })
      .subscribe({
        next: () => {
          this.message = 'Citat skapat!';
          this.isLoading = false;
          setTimeout(() => this.router.navigate(['/quotes']), 300);
        },
        error: (error: unknown) => {
          console.error(error);
          this.message = 'Fel vid skapande av citat';
          this.isLoading = false;
        },
      });
  }

  cancel() {
    this.router.navigate(['/quotes']);
  }
}

