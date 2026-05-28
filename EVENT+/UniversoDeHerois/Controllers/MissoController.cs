
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using UniversoDeHerois.BdContextUniverso_de_Herois;
using UniversoDeHerois.Models;

namespace HeroApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MissosController : ControllerBase
    {
        private readonly Universo_de_HeroisContext _context;

        public MissosController(Universo_de_HeroisContext context)
        {
            _context = context;
        }

        // GET: api/Missos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Misso>>> GetMissos()
        {
            var missos = await _context.Missoes
                                       .Include(m => m.Heroi)
                                       .Include(m => m.Equipe)
                                       .ToListAsync();
            return Ok(missos);
        }

        // GET: api/Missos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Misso>> GetMisso(int id)
        {
            var misso = await _context.Missoes
                                      .Include(m => m.Heroi)
                                      .Include(m => m.Equipe)
                                      .FirstOrDefaultAsync(m => m.Id == id);

            if (misso == null)
                return NotFound(new { mensagem = "Misso não encontrada." });

            return Ok(misso);
        }

        // POST: api/Missos
        [HttpPost]
        public async Task<ActionResult<Misso>> PostMisso(Misso misso)
        {
            var heroiExiste = await _context.Herois.AnyAsync(h => h.Id == misso.HeroiId);
            var equipeExiste = await _context.Equipes.AnyAsync(e => e.Id == misso.EquipeId);

            if (!heroiExiste || !equipeExiste)
                return BadRequest(new { mensagem = "Herói ou equipe inválidos para a misso." });

            _context.Missoes.Add(misso);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMisso), new { id = misso.Id }, misso);
        }

        // PUT: api/Missos/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMisso(int id, Misso misso)
        {
            if (id != misso.Id)
                return BadRequest(new { mensagem = "ID da misso não corresponde." });

            _context.Entry(misso).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.Missoes.AnyAsync(m => m.Id == id))
                    return NotFound(new { mensagem = "Misso não encontrada para atualização." });
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/Missos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMisso(int id)
        {
            var misso = await _context.Missoes.FindAsync(id);
            if (misso == null)
                return NotFound(new { mensagem = "Misso não encontrada para exclusão." });

            _context.Missoes.Remove(misso);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
