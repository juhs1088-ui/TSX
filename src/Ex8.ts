import { Aviao } from "./Ex7";

const aviao =  new Aviao();

aviao.setModelo("Embraer");
aviao.setTamanho(38);
aviao.setCor("Branco");
aviao.setQuantidadeAssento(150);

console.log("Modelo: ", aviao.getModelo());
console.log("QUal o tamanho: ", aviao.getTamanho());
console.log("Cor: ", aviao.getCor());
console.log("Quantidade de assento: ", aviao.getQuantidadeAssento());
