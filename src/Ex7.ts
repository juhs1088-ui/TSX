export class Aviao{

    private modelo : string = "";
    private tamanho: number = 0;
    private cor: string = "";
    private quantidadeAssento : number = 0;

    setModelo(modelo: string): void{
        this.modelo = modelo;
    }
    getModelo(): string{
        return this.modelo;
    }
    setTamanho(tamanho: number): void{
        this.tamanho = tamanho;
    }
    getTamanho(): number {
        return this.tamanho;
    }
    setCor(cor: string): void{
        this.cor = cor;
    }
    getCor(): string{
        return this.cor;
    }
    setQuantidadeAssento(quantidadeAssento: number): void{
        this.quantidadeAssento = quantidadeAssento;
    }
    getQuantidadeAssento(): number{
        return this.quantidadeAssento;
    }
}
