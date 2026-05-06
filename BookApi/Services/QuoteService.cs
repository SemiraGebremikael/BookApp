using BookApi.DTOs;
using BookApi.Models;
using BookApi.Repositories.Interfaces;
using BookApi.Services.Interfaces;

namespace BookApi.Services;

public class QuoteService : IQuoteService
{
    private readonly IQuoteRepository _repository;

    public QuoteService(IQuoteRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<Quote>> GetAllAsync()
    {
        return await _repository.GetAllAsync();
    }

    public async Task<Quote> CreateAsync(
        CreateQuoteDto dto)
    {
        var quote = new Quote
        {
            Text = dto.Text
        };

        await _repository.AddAsync(quote);

        await _repository.SaveChangesAsync();

        return quote;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var quote = await _repository.GetByIdAsync(id);

        if (quote == null)
            return false;

        await _repository.DeleteAsync(quote);

        await _repository.SaveChangesAsync();

        return true;
    }
}