import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api-service';
import { CreateQuoteDto, UpdateQuoteDto } from '../../models/quotes/quote.dto';




@Injectable({
  providedIn: 'root',
})
export class QuoteService {

  constructor(private api: ApiService) {}

  getAllQuotes() {
    return this.api.getAllQuotes();
  }

  createQuote(data: CreateQuoteDto) {
    return  this.api.createQuote(data);
  }

  updateQuote(id: number, dto: UpdateQuoteDto) {
    return this.api.updateQuote(id, dto);
  }

  deleteQuote(id: number) {
    return this.api.deleteQuote(id);
  }
}

