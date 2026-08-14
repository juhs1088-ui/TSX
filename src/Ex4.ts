import { Documento } from "./Ex3";

const documento = new Documento ();

documento.setNome("Julia");
documento.setIdade(16);
documento.setRG(5505580);
documento.setCPF(440066298-50);

console.log("Nome: ", documento.getNome());
console.log("Idade: ", documento.getIdade());
console.log("RG: ", documento.getRG());
console.log("CPF: ", documento.getCPF());