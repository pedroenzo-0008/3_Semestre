using FilmesTorloni.WebAPI.BdContextFilme;
using FilmesTorloni.WebAPI.Interfaces;
using FilmesTorloni.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FilmesTorloni.WebAPI.Repositories;

public class FilmeRepository : IFilmeRepository
{
    private readonly FIlmeContext _context;

    public FilmeRepository(FIlmeContext context)
    {
        _context = context;
    }
    public void AtualizarIdCorpo(Filme filmeAtualizado)
    {
        try
        {
            Filme filmeBuscado = _context.Filmes.Find(filmeAtualizado.IdFilme)!;

            if (filmeBuscado != null)
            {
                filmeBuscado.Titulo = filmeAtualizado.Titulo;
                filmeBuscado.IdGenero = filmeAtualizado.IdGenero;
            }

            _context.Filmes.Update(filmeBuscado!);
            _context.SaveChanges();
        }
        catch (Exception)
        {

            throw;
        }
    }

    public void AtualizarIdUrl(Guid id, Filme filmeAtualizado)
    {
        try
        {
            Filme filmeBuscado = _context.Filmes.Find(id.ToString())!;

            if (filmeBuscado != null)
            {
                filmeBuscado.Titulo = filmeAtualizado.Titulo;
                filmeBuscado.IdGenero =
                filmeAtualizado.IdGenero;
            }

            _context.Filmes.Update(filmeBuscado!);
            _context.SaveChanges();
        }
        catch (Exception)
        {

            throw;
        }
    }

    public Filme BuscarPorId(Guid id)
    {
        try
        {
            return _context.Filmes
                .Include(f => f.IdGeneroNavigation) // idem para busca individual
                .FirstOrDefault(f => f.IdFilme == id.ToString())!;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public void Cadastrar(Filme novoFilme)
    {
        try
        {
            novoFilme.IdFilme = Guid.NewGuid().ToString();

            _context.Filmes.Add(novoFilme);
            _context.SaveChanges();
        } 
        catch(Exception)
        {
            throw;
        }
    }

    public void Deletar(Guid id)
    {
        try
        {
            Filme filmeBuscado = _context.Filmes.Find(id.ToString())!;

            if (filmeBuscado != null)
            {
                _context.Filmes.Remove(filmeBuscado);
            }

            _context.SaveChanges();
        }
        catch (Exception)
        {

            throw;
        }
    }

    public List<Filme> Listar()
    {
        try
        {
            return _context.Filmes
                .Include(f => f.IdGeneroNavigation) // carrega o gênero
                .ToList();
        }
        catch (Exception)
        {
            throw;
        }
    }




}
