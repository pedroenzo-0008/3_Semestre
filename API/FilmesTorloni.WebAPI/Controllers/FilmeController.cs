using FilmesTorloni.WebAPI.DTO;
using FilmesTorloni.WebAPI.Interfaces;
using FilmesTorloni.WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FilmesTorloni.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class FilmeController : ControllerBase
{
    private readonly IFilmeRepository _fimeRepository;

    public FilmeController(IFilmeRepository fimeRepository)
    {
        _fimeRepository = fimeRepository;
    }

    [HttpGet("{id}")]
    public IActionResult GetById(Guid id)
    {
        try
        {
            var filme = _fimeRepository.BuscarPorId(id);
            if (filme == null) return NotFound("Filme não encontrado.");

            var urlImagem = !string.IsNullOrEmpty(filme.Imagem)
                ? $"{Request.Scheme}://{Request.Host}/imagens/{filme.Imagem}"
                : null;

            return Ok(new
            {
                filme.IdFilme,
                filme.Titulo,
                filme.IdGenero,
                filme.Imagem,
                UrlImagem = urlImagem
            });
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpGet]
    public IActionResult Get()
    {
        try
        {
            var filmes = _fimeRepository.Listar();
            var filmesComUrl = filmes.Select(f => new {
                f.IdFilme,
                f.Titulo,
                f.IdGenero,
                f.IdGeneroNavigation,
                f.Imagem,
                UrlImagem = !string.IsNullOrEmpty(f.Imagem)
                    ? $"{Request.Scheme}://{Request.Host}/imagens/{f.Imagem}"
                    : null
            });

            return Ok(filmesComUrl);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }


    [HttpPost]
    public async Task<IActionResult> Post([FromForm] FilmeDTO filme)
    {
        if (string.IsNullOrWhiteSpace(filme.Nome))
            return BadRequest("É obrigatório que o filme tenha Nome e Gênero");

        Filme novoFilme = new Filme
        {
            Titulo = filme.Nome,
            IdGenero = filme.IdGenero.ToString()
        };

        if (filme.ImagemUpload != null && filme.ImagemUpload.Length > 0)
        {
            var extensao = Path.GetExtension(filme.ImagemUpload.FileName);
            var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

            if (!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);

            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await filme.ImagemUpload.CopyToAsync(stream);
            }

            novoFilme.Imagem = nomeArquivo;
        }

        try
        {
            _fimeRepository.Cadastrar(novoFilme);
            return StatusCode(201);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(Guid id, [FromForm] FilmeDTO filmeAtualizado)
    {
        var filmeBuscado = _fimeRepository.BuscarPorId(id);

        if (filmeBuscado == null)
            return NotFound("Filme não encontrado!");

        if (!string.IsNullOrWhiteSpace(filmeAtualizado.Nome))
            filmeBuscado.Titulo = filmeAtualizado.Nome;

        if (filmeAtualizado.IdGenero != Guid.Empty &&
            filmeBuscado.IdGenero != filmeAtualizado.IdGenero.ToString())
        {
            filmeBuscado.IdGenero = filmeAtualizado.IdGenero.ToString();
        }

        if (filmeAtualizado.ImagemUpload != null && filmeAtualizado.ImagemUpload.Length > 0)
        {
            var pastaRelativa = "wwwroot/imagens";
            var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

            if (!string.IsNullOrEmpty(filmeBuscado.Imagem))
            {
                var caminhoAntigo = Path.Combine(caminhoPasta, filmeBuscado.Imagem);
                if (System.IO.File.Exists(caminhoAntigo))
                    System.IO.File.Delete(caminhoAntigo);
            }

            var extensao = Path.GetExtension(filmeAtualizado.ImagemUpload.FileName);
            var nomeArquivo = $"{Guid.NewGuid()}{extensao}";

            if (!Directory.Exists(caminhoPasta))
                Directory.CreateDirectory(caminhoPasta);

            var caminhoCompleto = Path.Combine(caminhoPasta, nomeArquivo);
            using (var stream = new FileStream(caminhoCompleto, FileMode.Create))
            {
                await filmeAtualizado.ImagemUpload.CopyToAsync(stream);
            }

            filmeBuscado.Imagem = nomeArquivo;
        }

        try
        {
            _fimeRepository.AtualizarIdUrl(id, filmeBuscado);
            return NoContent();
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(Guid id)
    {
        var filmeBuscado = _fimeRepository.BuscarPorId(id);
        if (filmeBuscado == null)
            return NotFound("Filme não encontrado.");

        var pastaRelativa = "wwwroot/imagens";
        var caminhoPasta = Path.Combine(Directory.GetCurrentDirectory(), pastaRelativa);

        if (!string.IsNullOrEmpty(filmeBuscado.Imagem))
        {
            var caminho = Path.Combine(caminhoPasta, filmeBuscado.Imagem);
            if (System.IO.File.Exists(caminho))
                System.IO.File.Delete(caminho);
        }

        try
        {
            _fimeRepository.Deletar(id);
            return NoContent();
        }
        catch (Exception erro)
        {
            return BadRequest(erro.Message);
        }
    }
}
