export class Documento{
    
    private nome: string ="";
    private idade: number = 0;
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
