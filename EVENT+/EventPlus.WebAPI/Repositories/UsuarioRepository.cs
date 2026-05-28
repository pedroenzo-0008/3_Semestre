using EventPlus.WebAPI.BdContextEvent;
using EventPlus.WebAPI.Interfaces;
using EventPlus.WebAPI.Models;
using EventPlus.WebAPI.Utils;
using Microsoft.EntityFrameworkCore;

namespace EventPlus.WebAPI.Repositories;

public class UsuarioRepository : IUsuarioRepository
{
    private readonly EventContext _context;
    
    //Método construtor que aplica a injeção de dependecia

    public UsuarioRepository(EventContext context)
    {
        _context = context;
    }

    /// <summary>
    /// Busca o usuario pelo email e valida o hash da senha 
    /// </summary>
    /// <param name="Email">Email do usuario a ser buscado</param>
    /// <param name="Senha">Senha para validar o usuario</param>
    /// <returns>Usuario buscado</returns>
    public Usuario BuscarPorEmailESenha(string Email, string Senha, Guid IdTipoUsuario)
    {
        //Primeiro, buscamos o usuario pelo email
        var usuarioBuscado = _context.Usuarios
            .Include(usuario => usuario.IdTipoUsuarioNavigation)
            .FirstOrDefault(usuario => usuario.Email == Email);

        //Verificamos se o usuario foi encontrado
        if (usuarioBuscado != null)
        {
            bool confere = Criptografia.CompararHash(Senha, usuarioBuscado.Senha);

            if (confere)
            {
                return usuarioBuscado;
            }
        }

        return null!;
    }

    

    /// <summary>
    /// Busca um Usuario pelo Id incluindo os dados do seu tipo de Usuaoio
    /// </summary>
    /// <param name="id">id do usuario a ser buscado</param>
    /// <returns>Usuario Buscado e seu tipo de usuario</returns>
    public Usuario BuscarPorId(Guid id)
    {
        return _context.Usuarios
             .Include(usuario => usuario.IdTipoUsuarioNavigation)
             .FirstOrDefault(usuario => usuario.IdUsuario == id)!;
    }

    /// <summary>
    /// Cadastra um novo Usuario. A senha é criptografada e o id gerado pelo Banco
    /// </summary>
    /// <param name="usuario">Usuario a ser cadastrado</param>
    public void Cadastrar(Usuario usuario)
    {
       usuario.Senha = Criptografia.GerarHash(usuario.Senha);
        _context.Usuarios.Add(usuario);
        _context.SaveChanges();
    }
}
