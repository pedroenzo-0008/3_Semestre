using EventPlus.WebAPI.DTO;
using EventPlus.WebAPI.Interfaces;
using EventPlus.WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EventPlus.WebAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class InstituicaoController : ControllerBase
{
 
        private IInstituicaoRepository _instituicaoRepository;

        public InstituicaoController(IInstituicaoRepository instituicaoRepository)
        {
            _instituicaoRepository = instituicaoRepository;
        }

        /// <summary>
        /// Endpoint da API que faz chamada para listar as instituições
        /// </summary>
        /// <returns>Status Code 200 e a lista de instituições</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_instituicaoRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        /// <summary>
        /// Endpoint da API que busca uma instituição específica
        /// </summary>
        /// <param name="id">Id da instituição buscada</param>
        /// <returns>Status Code 200 e a instituição encontrada</returns>
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(Guid id)
        {
            try
            {
                return Ok(_instituicaoRepository.BuscarPorId(id));
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        /// <summary>
        /// Endpoint da API que cadastra uma nova instituição
        /// </summary>
        /// <param name="instituicao">Instituição a ser cadastrada</param>
        /// <returns>Status Code 201</returns>
        [HttpPost]
        public IActionResult Cadastrar(InstituicaoDTO instituicao)
        {
            try
            {
                var novaInstituicao = new Instituicao
                {
                    NomeFantasia = instituicao.NomeFantasia!,
                    Cnpj = instituicao.Cnpj!,
                    Endereco = instituicao.Endereco!
                };

                _instituicaoRepository.Cadastrar(novaInstituicao);

                return StatusCode(201, instituicao);
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        /// <summary>
        /// Endpoint da API que atualiza uma instituição
        /// </summary>
        /// <param name="id">Id da instituição</param>
        /// <param name="instituicao">Dados atualizados</param>
        /// <returns>Status Code 204</returns>
        [HttpPut("{id}")]
        public IActionResult Atualizar(Guid id, InstituicaoDTO instituicao)
        {
            try
            {
                var instituicaoAtualizada = new Instituicao
                {
                    NomeFantasia = instituicao.NomeFantasia!,
                    Cnpj = instituicao.Cnpj!,
                    Endereco = instituicao.Endereco!
                };

                _instituicaoRepository.Atualizar(id, instituicaoAtualizada);

                return StatusCode(204, instituicaoAtualizada);
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        /// <summary>
        /// Endpoint da API que deleta uma instituição
        /// </summary>
        /// <param name="id">Id da instituição a ser deletada</param>
        /// <returns>Status Code 204</returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _instituicaoRepository.Deletar(id);
                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }
    }
