import {Pessoa} from "./Ex1"

const pessoa1 = new Pessoa();
const pessoa2 = new Pessoa();

pessoa1.setNome("Tom Cruise");
pessoa1.setIdade(60);
pessoa1.setEndereço("California. USA");
pessoa1.setProfissao("Ator");

pessoa2.setNome("Messi");
pessoa2.setIdade(35);
pessoa2.setEndereço("Miami, USA");
pessoa2.setProfissao("Jogador de Futebol");

console.log("----- OBJETO1 ------");
console.log(pessoa1.getNome());
console.log(pessoa1.getIdade());
console.log(pessoa1.getEndereco());
console.log(pessoa1.getProfissao());

console.log("------OBJETO2 ------");
console.log(pessoa2.getNome());
console.log(pessoa2.getIdade());
console.log(pessoa2.getEndereco());
console.log(pessoa2.getProfissao());
