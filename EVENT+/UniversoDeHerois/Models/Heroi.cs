using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace UniversoDeHerois.Models;

public partial class Heroi
{
    [Key]
    public int Id { get; set; }

    [StringLength(100)]
    public string Nome { get; set; } = null!;

    [StringLength(100)]
    public string Poder { get; set; } = null!;

    public int EquipeId { get; set; }

    [ForeignKey("EquipeId")]
    [InverseProperty("Herois")]
    public virtual Equipe Equipe { get; set; } = null!;

    [InverseProperty("Heroi")]
    public virtual ICollection<Misso> Missos { get; set; } = new List<Misso>();
}
