using BookApi.DTOs;
using BookApi.Models;

namespace BookApi.Services.Interfaces;

public interface IQuoteService
{
    Task<List<Quote>> GetAllAsync();

    Task<Quote> CreateAsync(CreateQuoteDto dto);

    Task<bool> DeleteAsync(int id);
}