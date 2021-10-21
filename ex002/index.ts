interface Pessoa {
    nome: String;
    idade: number;
    nacionalidade: String;
}

//"Omit" omitindo um atributo
interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{

}

