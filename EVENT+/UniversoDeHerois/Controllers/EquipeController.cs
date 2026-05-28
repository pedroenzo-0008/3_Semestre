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
    public class EquipesController : ControllerBase
    {
        private readonly Universo_de_HeroisContext _context;

        public EquipesController(Universo_de_HeroisContext context)
        {
            _context = context;
        }

        // GET: api/Equipes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Equipe>>> GetEquipes()
        {
            return await _context.Equipes
                                 .Include(e => e.Herois)
                                 .Include(e => e.Missos)
                                 .ToListAsync();
        }

        // GET: api/Equipes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Equipe>> GetEquipe(int id)
        {
            var equipe = await _context.Equipes
                                       .Include(e => e.Herois)
                                       .Include(e => e.Missos)
                                       .FirstOrDefaultAsync(e => e.Id == id);

            if (equipe == null)
                return NotFound();

            return equipe;
        }

        // POST: api/Equipes
        [HttpPost]
        public async Task<ActionResult<Equipe>> PostEquipe(Equipe equipe)
        {
            _context.Equipes.Add(equipe);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEquipe), new { id = equipe.Id }, equipe);
        }

        // PUT: api/Equipes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEquipe(int id, Equipe equipe)
        {
            if (id != equipe.Id)
                return BadRequest();

            _context.Entry(equipe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Equipes.AnyAsync(e => e.Id == id).Result)
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        // DELETE: api/Equipes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEquipe(int id)
        {
            var equipe = await _context.Equipes.FindAsync(id);
            if (equipe == null)
                return NotFound();

            _context.Equipes.Remove(equipe);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
