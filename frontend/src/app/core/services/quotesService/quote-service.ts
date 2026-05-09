import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoteDto } from '../../models/quotes/quote.dto';

export interface CreateQuoteDto {
  text: string;
}

export interface UpdateQuoteDto {
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private baseUrl = 'https://localhost:7161/api';

  constructor(private http: HttpClient) {}

  getAllQuotes() {
    return this.http.get<QuoteDto[]>(`${this.baseUrl}/quotes`);
  }

  createQuote(dto: CreateQuoteDto) {
    return this.http.post<QuoteDto>(`${this.baseUrl}/quotes`, dto);
  }

  updateQuote(id: number, dto: UpdateQuoteDto) {
    return this.http.put<QuoteDto>(`${this.baseUrl}/quotes/${id}`, dto);
  }

  deleteQuote(id: number) {
    return this.http.delete(`${this.baseUrl}/quotes/${id}`);
  }
}

