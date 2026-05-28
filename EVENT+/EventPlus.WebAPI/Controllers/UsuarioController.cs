using EventPlus.WebAPI.Interfaces;
using EventPlus.WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventPlus.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsuarioController : ControllerBase
{
    private readonly IUsuarioRepository _usuarioRepository;

    public  UsuarioController(IUsuarioRepository usuarioRepository)
    {
        _usuarioRepository = usuarioRepository;
    }   

    /// <summary>
    /// Endpoint da API que faz a chamada para o método de Buscar um usuario por id
    /// </summary>
    /// <param name="id">Id do usuario a ser Buscado</param>
    /// <returns>Status code 200 e o usuario buscado</returns>
    [HttpGet("{id}")]
    public IActionResult BuscarPorId(Guid id)
    {
        try
        {
            return Ok(_usuarioRepository.BuscarPorId(id));
        }
        catch (Exception error)
        {

            return BadRequest(error.Message);
        }

    }
    /// <summary>
    /// Endpoint da API que faz a chamada para o método de Buscar um usuario por id
    /// </summary>
    /// <param name="usuario">Usuario a ser Cadastrado</param>
    /// <returns>Status code 201 e o usuario cadastrado</returns>
    [HttpPost]
    public IActionResult Cadastrar(Usuario usuario)
    {
        try
        {
            _usuarioRepository.Cadastrar(usuario);
            return StatusCode(201, usuario);
        }
        catch (Exception error)
        {

            return BadRequest(error.Message);
        }
    }
}
