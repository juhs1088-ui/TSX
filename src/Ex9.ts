export class Animal {

    private nome: string = "";
    private especie: string = "";
    private idade: number = 0;
    private peso: number = 0;

    setNome(nome: string): void {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }


    setEspecie(especie: string): void {
        this.especie = especie;
    }

    getEspecie(): string {
        return this.especie;
    }


    setIdade(idade: number): void {
        this.idade = idade;
    }

    getIdade(): number {
        return this.idade;
    }


    setPeso(peso: number): void {
        this.peso = peso;
    }

    getPeso(): number {
        return this.peso;
    }
}

const vaca = new Animal();

vaca.setNome("Mimosa");
vaca.setEspecie("Vaca");
vaca.setIdade(5);
vaca.setPeso(500);


const bezerro = new Animal();

bezerro.setNome("bee");
bezerro.setEspecie("Bezerro");
bezerro.setIdade(1);
bezerro.setPeso(150);


const cabra = new Animal();

cabra.setNome("Mel");
cabra.setEspecie("Cabra");
cabra.setIdade(3);
cabra.setPeso(60);


const coelho = new Animal();

coelho.setNome("Floquinho");
coelho.setEspecie("Coelho");
coelho.setIdade(2);
coelho.setPeso(2);


const galinha = new Animal();

galinha.setNome("Pintadinha");
galinha.setEspecie("Galinha");
galinha.setIdade(2);
galinha.setPeso(2);


console.log("===== ANIMAIS =====");

console.log("\nVACA");
console.log("Nome:", vaca.getNome());
console.log("Espécie:", vaca.getEspecie());
console.log("Idade:", vaca.getIdade());
console.log("Peso:", vaca.getPeso(), "kg");


console.log("\nBEZERRO");
console.log("Nome:", bezerro.getNome());
console.log("Espécie:", bezerro.getEspecie());
console.log("Idade:", bezerro.getIdade());
console.log("Peso:", bezerro.getPeso(), "kg");


console.log("\nCABRA");
console.log("Nome:", cabra.getNome());
console.log("Espécie:", cabra.getEspecie());
console.log("Idade:", cabra.getIdade());
console.log("Peso:", cabra.getPeso(), "kg");


console.log("\nCOELHO");
console.log("Nome:", coelho.getNome());
console.log("Espécie:", coelho.getEspecie());
console.log("Idade:", coelho.getIdade());
console.log("Peso:", coelho.getPeso(), "kg");


console.log("\nGALINHA");
console.log("Nome:", galinha.getNome());
console.log("Espécie:", galinha.getEspecie());
console.log("Idade:", galinha.getIdade());
console.log("Peso:", galinha.getPeso(), "kg");