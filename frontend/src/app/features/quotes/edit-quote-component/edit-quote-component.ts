import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService, UpdateQuoteDto } from '../../../core/services/quotesService/quote-service';
import { QuoteDto } from '../../../core/models/quotes/quote.dto';

@Component({
  selector: 'app-edit-quote',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-quote-component.html',
})
export class EditQuoteComponent implements OnInit {
  quote: QuoteDto | null = null;
  isLoading = false;
  message = '';

  constructor(
    private quoteService: QuoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadQuote(id);
  }

  private loadQuote(id: number) {
    this.isLoading = true;

    // API has only GET all. We'll fetch all and find by id.
    this.quoteService.getAllQuotes().subscribe({
      next: (data: QuoteDto[]) => {
        this.quote = data.find((q) => q.id === id) ?? null;
        this.isLoading = false;
      },
      error: (error: unknown) => {
        console.error(error);
        this.message = 'Fel vid hämtning av citat';
        this.isLoading = false;
      },
    });
  }

  submit() {
    if (!this.quote || !this.quote.text.trim()) {
      this.message = 'Vänligen fyll i citatet';
      return;
    }

    this.isLoading = true;

    this.quoteService
      .updateQuote(this.quote.id, { text: this.quote.text.trim() })
      .subscribe({
        next: () => {
          this.message = 'Citat uppdaterat!';
          this.isLoading = false;
          setTimeout(() => this.router.navigate(['/quotes']), 300);
        },
        error: (error: unknown) => {
          console.error(error);
          this.message = 'Fel vid uppdatering av citat';
          this.isLoading = false;
        },
      });
  }

  cancel() {
    this.router.navigate(['/quotes']);
  }
}

