using EventPlus.WebAPI.DTO;
using EventPlus.WebAPI.Interfaces;
using EventPlus.WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace EventPlus.WebAPI.Controllers;


    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public LoginController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpPost]
        public IActionResult Login(LoginDTO loginDTO)
        {
            try
            {
            if (loginDTO.IdTipoUsuario == null)
            {
                return BadRequest("IdTipoUsuario é obrigatorio.");
            }
                
            Usuario usuarioBuscado = _usuarioRepository.BuscarPorEmailESenha
                (loginDTO.Email!, 
                 loginDTO.Senha!, 
                 loginDTO.IdTipoUsuario.Value);

            if (usuarioBuscado == null)
            {
                return NotFound("Email ou Senha invalídos!");
            }

            var claims = new[]
                {
                new Claim(JwtRegisteredClaimNames.Jti, usuarioBuscado.IdUsuario.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),
                new Claim(JwtRegisteredClaimNames.Name, usuarioBuscado.Nome),
                new Claim(ClaimTypes.Role, usuarioBuscado.IdTipoUsuario.ToString())


            };
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("eventos-chave-autenticacao-webapi-dev"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken
                (
                    issuer: "api_eventos",
                    audience: "api_eventos",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: creds
               );
                return Ok(new
                {
                    Token = new JwtSecurityTokenHandler().WriteToken(token),
                }

                );
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }
    }

