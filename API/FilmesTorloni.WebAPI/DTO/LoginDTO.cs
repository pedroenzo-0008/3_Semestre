using System.ComponentModel.DataAnnotations;

namespace FilmesTorloni.WebAPI.DTO;

public class LoginDTO
{
    [Required(ErrorMessage = "O Email do Usuario é obrigatório!")]
    public string? Email { get; set; }

    [Required(ErrorMessage = "A senha do Usuario é obrigatório")]
    public string? Senha { get; set; }
}
