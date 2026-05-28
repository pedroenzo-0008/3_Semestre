using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace UniversoDeHerois.Models;

public partial class Equipe
{
    [Key]
    public int Id { get; set; }

    [StringLength(100)]
    public string Nome { get; set; } = null!;

    [StringLength(255)]
    public string Descricao { get; set; } = null!;

    [InverseProperty("Equipe")]
    public virtual ICollection<Heroi> Herois { get; set; } = new List<Heroi>();

    [InverseProperty("Equipe")]
    public virtual ICollection<Misso> Missos { get; set; } = new List<Misso>();
}
