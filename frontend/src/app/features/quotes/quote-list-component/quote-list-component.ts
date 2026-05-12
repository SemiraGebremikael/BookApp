import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuoteService } from '../../../core/services/quotesService/quote-service';
import { QuoteDto } from '../../../core/models/quotes/quote.dto';
import { DeleteQuoteComponent } from '../delete-quote-component/delete-quote-component';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [CommonModule, DeleteQuoteComponent],
  schemas: [] as any,
  templateUrl: './quote-list-component.html',
})
export class QuoteListComponent implements OnInit {
  quotes: QuoteDto[] = [];
  message = '';


  private quoteService = inject(QuoteService);
  private router = inject(Router);  

  ngOnInit(): void {
    this.loadQuotes();
  }

  loadQuotes() {
    this.quoteService.getAllQuotes().subscribe({
      next: (data: QuoteDto[]) => {
        this.quotes = data;        
        this.message = '';
              },
      error: (error: unknown) => {
        console.error(error);
        this.message = 'Fel vid hämtning av citat';
      },
    });
  }



  edit(id: number) {
    this.router.navigate(['/quotes/edit', id]);
  }

  create() {
    this.router.navigate(['/quotes/new']);
  }

  handleDelete(id: number) {
    this.message = 'Citat raderat!';
    this.loadQuotes();
  }
}

