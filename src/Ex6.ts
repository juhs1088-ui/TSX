import { Carro } from "./Ex5";

const carro = new Carro();

carro.setMarca("Fusca");
carro.setAno(1999)
carro.setPlaca("ABC-1234");
carro.setCor("Amarelo");

console.log("Marca:", carro.getMarca());
console.log("Ano:", carro.getAno());
console.log("Placa:", carro.getPlaca());
console.log("Cor:", carro.getCor());