export class Carro{
    
    private marca: string = "";
    private ano: number = 0;
    private placa: string = "";
    private cor: string = "";

    setMarca(marca: string): void{
        this.marca= marca;
    }
    getMarca(): string{
        return this.marca;
    
    }
    setAno(ano: number): void{
        this.ano = ano;
    }
    getAno(): number{
        return this.ano;
    }
    setPlaca(placa: string): void{
        this.placa = placa;
    }
    getPlaca(): string{
        return this.placa
    }
    setCor(cor: string): void{
        this.cor = cor;
    }
    getCor(): string{
        return this.cor;
    }
}


