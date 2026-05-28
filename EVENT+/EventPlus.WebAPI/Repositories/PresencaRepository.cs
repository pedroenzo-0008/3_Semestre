using EventPlus.WebAPI.BdContextEvent;
using EventPlus.WebAPI.Interfaces;
using EventPlus.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EventPlus.WebAPI.Repositories;

public class PresencaRepository : IPresencaRepository
{
    private readonly EventContext _eventContext;

    public PresencaRepository(EventContext eventContext)
    {
        _eventContext = eventContext;
    }

    /// <summary>
    /// Atualiza a situação da presença (confirmar ou cancelar)
    /// </summary>
    /// <param name="id">Id da presença</param>
    public void Atualizar(Guid id, Presenca presenca)
    {
        var presencaBuscada = _eventContext.Presencas.Find(id);
        if (presencaBuscada != null)
        {
            
            presencaBuscada.Situacao = presenca.Situacao;
            presencaBuscada.IdUsuario = presenca.IdUsuario;
            presencaBuscada.IdEvento = presenca.IdEvento;


        }
    }

    

    /// <summary>
    /// Busca uma Presença por id 
    /// </summary>
    /// <param name="id">id da presença a ser buscada</param>
    /// <returns>presença buscada</returns>
    public Presenca BuscarPorId(Guid id)
    {
        return _eventContext.Presencas
              .Include(p => p.IdEventoNavigation)
              .ThenInclude(e => e!.IdInstituicaoNavigation)
              .FirstOrDefault(p => p.IdPresenca == id)!;
    }

    /// <summary>
    /// Remove uma presença
    /// </summary>
    public void Deletar(Guid id)
    {
        var PresencaBuscada = _eventContext.Presencas.Find(id);
        if (PresencaBuscada != null)
        {
            _eventContext.Presencas.Remove(PresencaBuscada);
            _eventContext.SaveChanges();
        }
    }

    /// <summary>
    /// inscreve uma pessoa 
    /// </summary>
    /// <param name="Inscricao">presença a ser inscrita</param>
    public void Inscrever(Presenca Inscricao)
    {
        _eventContext.Presencas.Add(Inscricao);
        _eventContext.SaveChanges();
    }

    /// <summary>
    /// lista todas ass presenças 
    /// </summary>
    /// <returns>retorna a lista presencas </returns>
    public List<Presenca> Listar()
    {
        return _eventContext.Presencas.OrderBy(Presenca => Presenca).ToList();
    }

    /// <summary>
    /// Lista a presença de usuario especifico
    /// </summary>
    /// <param name="IdUsuario">id do ususario para filtragem</param>
    /// <returns>uma lista de presenças de um usuario especifico</returns>
    public List<Presenca> ListarMinhas(Guid IdUsuario)
    {
        return _eventContext.Presencas
            .Include(p => p.IdEventoNavigation)
            .ThenInclude(e => e!.IdInstituicaoNavigation)
            .Where(p => p.IdUsuario == IdUsuario)
            .ToList();
    }
}
