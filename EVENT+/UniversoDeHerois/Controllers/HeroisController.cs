
using UniversoDeHerois.Models;
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
    public class HeroisController : ControllerBase
    {
        private readonly Universo_de_HeroisContext _context;

        public HeroisController(Universo_de_HeroisContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Heroi>>> GetHerois()
        {
            return await _context.Herois.Include(h => h.Equipe).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Heroi>> GetHeroi(int id)
        {
            var heroi = await _context.Herois.Include(h => h.Equipe).FirstOrDefaultAsync(h => h.Id == id);
            if (heroi == null) return NotFound();
            return heroi;
        }

        [HttpPost]
        public async Task<ActionResult<Heroi>> PostHeroi(Heroi heroi)
        {
            _context.Herois.Add(heroi);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetHeroi), new { id = heroi.Id }, heroi);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutHeroi(int id, Heroi heroi)
        {
            if (id != heroi.Id) return BadRequest();
            _context.Entry(heroi).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHeroi(int id)
        {
            var heroi = await _context.Herois.FindAsync(id);
            if (heroi == null) return NotFound();
            _context.Herois.Remove(heroi);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
