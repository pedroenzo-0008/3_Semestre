namespace FilmesTorloni.WebAPI.DTO;

public class FilmeDTO
{
    public Guid IdFilme { get; set; }
    public string? Nome { get; set; }
    public IFormFile? ImagemUpload { get; set; } // usado no cadastro/atualização
    public string? Imagem { get; set; }          // nome/URL da capa salva
    public Guid IdGenero { get; set; }
    public string NomeGenero { get; set; } = string.Empty;
}
