using EventPlus.WebAPI.DTO;
using EventPlus.WebAPI.Interfaces;
using EventPlus.WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventPlus.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PresencaController : ControllerBase
{
    private IPresencaRepository _presencaRepository;
    public PresencaController(IPresencaRepository presencaRepository)
    {
        _presencaRepository = presencaRepository;
    }

    /// <summary>
    /// Endpoint da API que retorna uma presença por id
    /// </summary>
    /// <param name="id">id da presença a ser buscada </param>
    /// <returns>status code 200 e presença buscada</returns>
    [HttpGet("{id}")]
    public IActionResult BuscarPorId(Guid id)
    {
        try
        {
            return Ok(_presencaRepository.BuscarPorId(id));
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }
    /// <summary>
    /// Endpoint da API que retorna uma lista de presenças de um usuário
    /// </summary>
    /// <param name="IdUsuario">Id do usuario para filtragem</param>
    /// <returns>Lista de presença filtrada pelo usuario</returns>
    [HttpGet("ListarMinhas/{IdUsuario}")]
    public IActionResult ListarMinhasPresencas(Guid IdUsuario)
    {
        try
        {
            return Ok(_presencaRepository.ListarMinhas(IdUsuario));
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    /// <summary>
    /// Endpoint da API que faz a chamada para o método de inscrever um usuário em um evento
    /// </summary>
    /// <param name="presenca">dados da presença a ser inscrita</param>
    /// <returns>Status code 201</returns>
    [HttpGet]
    public IActionResult Listar()
    {
        try
        {
            return Ok(_presencaRepository.Listar());
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpPost]
    public IActionResult Inscrever(PresencaDTO presenca)
    {
        try
        {
            var novaPresenca = new Presenca
            {
                IdUsuario = presenca.IdUsuario,
                IdEvento = presenca.IdEvento,
                Situacao = presenca.Situacao
            };
            _presencaRepository.Inscrever(novaPresenca);
            return StatusCode(201, novaPresenca);
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpPut("{id}")]
    public IActionResult Atualizar(Guid id, PresencaDTO presenca)
    {
        try
        {
            var presencaAtualizada = new Presenca
            {
                IdPresenca = id,
                IdUsuario = presenca.IdUsuario,
                IdEvento = presenca.IdEvento,
                Situacao = presenca.Situacao
            };
            _presencaRepository.Atualizar(id, presencaAtualizada);
            return Ok(_presencaRepository.Listar());
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Deletar(Guid id)
    {
        try
        {
            _presencaRepository.Deletar(id);
            return Ok(_presencaRepository.Listar());
        }
        catch (Exception error)
        {
            return BadRequest(error.Message);
        }

    }
}