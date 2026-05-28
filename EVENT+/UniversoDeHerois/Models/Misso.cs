using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace UniversoDeHerois.Models;

public partial class Misso
{
    [Key]
    public int Id { get; set; }

    [StringLength(100)]
    public string Titulo { get; set; } = null!;

    [StringLength(255)]
    public string Descricao { get; set; } = null!;

    public int HeroiId { get; set; }

    public int EquipeId { get; set; }

    [ForeignKey("EquipeId")]
    [InverseProperty("Missos")]
    public virtual Equipe Equipe { get; set; } = null!;

    [ForeignKey("HeroiId")]
    [InverseProperty("Missos")]
    public virtual Heroi Heroi { get; set; } = null!;
}
