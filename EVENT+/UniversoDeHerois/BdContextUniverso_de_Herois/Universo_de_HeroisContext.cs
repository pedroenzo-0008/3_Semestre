using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using UniversoDeHerois.Models;

namespace UniversoDeHerois.BdContextUniverso_de_Herois;

public partial class Universo_de_HeroisContext : DbContext
{
    public Universo_de_HeroisContext()
    {
    }

    public Universo_de_HeroisContext(DbContextOptions<Universo_de_HeroisContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Equipe> Equipes { get; set; }

    public virtual DbSet<Heroi> Herois { get; set; }

    public virtual DbSet<Misso> Missoes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=Universo_de_Herois;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Equipe>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Equipes__3214EC07E10E134D");
        });

        modelBuilder.Entity<Heroi>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Herois__3214EC073F42571A");

            entity.HasOne(d => d.Equipe).WithMany(p => p.Herois)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Herois__EquipeId__5EBF139D");
        });

        modelBuilder.Entity<Misso>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Missoes__3214EC076190B031");

            entity.HasOne(d => d.Equipe).WithMany(p => p.Missos)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Missoes__EquipeI__628FA481");

            entity.HasOne(d => d.Heroi).WithMany(p => p.Missos)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Missoes__HeroiId__619B8048");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
