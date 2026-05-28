using FilmesTorloni.WebAPI.BdContextFilme;
using FilmesTorloni.WebAPI.Controllers;
using FilmesTorloni.WebAPI.Interfaces;
using FilmesTorloni.WebAPI.Models;

namespace FilmesTorloni.WebAPI.Repositories
{
    public class GeneroRepository : IGeneroRepository
    {
        private readonly FIlmeContext _context;
        public GeneroRepository(FIlmeContext context)
        {
            _context = context;
        }
        public void AtualizarIdCorpo(Genero GeneroAtualizado)
        {
            try
            {
                Genero generoBuscado = _context.Generos.Find(GeneroAtualizado.IdGenero.ToString())!;
                if (generoBuscado != null)
                {
                    generoBuscado.Nome = GeneroAtualizado.Nome;
                }

                _context.Generos.Update(generoBuscado!);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void AtualizarIdUrl(Guid id, Genero generoAtualizado)
        {
            try
            {
                Genero generoBuscado = _context.Generos.Find
                    (id.ToString())!;
                if (generoBuscado != null)
                {
                    generoBuscado.Nome = generoAtualizado.Nome;
                }

                _context.Generos.Update(generoBuscado!);
                _context.SaveChanges();
            }
            catch (Exception)

            {
                throw;
            }
        }

        public Genero BuscarPorId(Guid id)
        {
            try
            {
                Genero generoBuscado = _context.Generos.Find
                    (id.ToString())!;
                return generoBuscado;
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public void Cadastrar(Genero novoGenero)
        {
            try
            {
                novoGenero.IdGenero = Guid.NewGuid().ToString();
                _context.Generos.Add(novoGenero);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Deletar(Guid id)
        {
            try
            {
                Genero generoBuscado = _context.Generos.Find(id.ToString())!;

                if (generoBuscado != null)
                {
                    _context.Generos.Remove(generoBuscado);

                }

                _context.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Genero> Listar()
        {
            try
            {
                List<Genero> listaGeneros = _context.Generos.ToList(); return listaGeneros;
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
