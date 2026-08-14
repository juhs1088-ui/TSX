export class Cliente {

    private id: number = 0;
    private nome: string = "";
    private telefone: string = "";
    private cpf: string = "";
    private rg: string = "";


    setID(id: number): void {
        this.id = id;
    }

    getID(): number {
        return this.id;
    }


    setNome(nome: string): void {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }


    setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    getTelefone(): string {
        return this.telefone;
    }


    setCPF(cpf: string): void {
        this.cpf = cpf;
    }

    getCPF(): string {
        return this.cpf;
    }


    setRG(rg: string): void {
        this.rg = rg;
    }

    getRG(): string {
        return this.rg;
    }
}


const cliente1 = new Cliente();

cliente1.setID(1);
cliente1.setNome("Julia");
cliente1.setTelefone("15999999999");
cliente1.setCPF("44004400040");
cliente1.setRG("5555555");


const cliente2 = new Cliente();

cliente2.setID(2);
cliente2.setNome("Maria");
cliente2.setTelefone("15988888888");
cliente2.setCPF("33003300030");
cliente2.setRG("4444444");

console.log("===== CLIENTE 1 =====");

console.log("ID:", cliente1.getID());
console.log("Nome:", cliente1.getNome());
console.log("Telefone:", cliente1.getTelefone());
console.log("CPF:", cliente1.getCPF());
console.log("RG:", cliente1.getRG());


console.log("\n===== CLIENTE 2 =====");

console.log("ID:", cliente2.getID());
console.log("Nome:", cliente2.getNome());
console.log("Telefone:", cliente2.getTelefone());
console.log("CPF:", cliente2.getCPF());
console.log("RG:", cliente2.getRG());