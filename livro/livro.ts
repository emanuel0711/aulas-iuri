class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    obterDetalhes(): void {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`);
    }
}

let livro = new Livro("Exemplo de Título", "Exemplo de Autor", 2024);
livro.obterDetalhes();
