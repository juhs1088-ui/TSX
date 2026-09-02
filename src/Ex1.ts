export class Pessoa{
    
    private nome: string ="";
    private idade: number = 0;
    private endereco: string = "";
    private profissao: string= "";
    private rg: number =0;
    private cpf: number =0;

    setNome(nome: string): void {
        this.nome = nome;
    }
    getNome(): string {
            return this.nome;
    }
    setIdade(idade: number): void{
        this.idade = idade;
}
    getIdade(): number {
         return this.idade;
}
     setEndereço(endereco: string): void{
        this.endereco = endereco;
}
    getEndereco(): string {
             return this.endereco;
}
     setProfissao(profissao: string): void{
         this.profissao = profissao;
}
    getProfissao(): string {
            return this.profissao;
    }
    setRG(rg: number): void{
        this.rg= rg
}
    getRG(): number{
             return this.rg;
}
     setCPF(cpf: number): void{
         this.cpf =cpf;
     }

    getCPF(): number{
        return this.cpf;
}

}
