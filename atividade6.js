class Estudante {
    constructor (nome, email, ra, curso, disciplinas){
        this.nome = nome;
        this.email = email;
        this.ra = ra;
        this.curso = curso;
        this.disciplinas = disciplinas;
    }
    estprimeiradisciplina(){
        console.log(`A primeira disciplina do aluno ${this.nome} é ${this.disciplinas[0]}`);
    }
    estultimadisciplina(){
        let last = this.disciplinas.length - 1
        console.log(`A ultima disciplina do aluno ${this.nome} é ${this.disciplinas[last]}`);
    }
}

const aluno1 = new Estudante("estudante1","estudante1@fatec.sp.gov.br",1234567891234,"Analise e desenvolvimento de Sistemas",[
        "Engenharia de Software",
        "Sistemas de Informação",
        "Inglês",
        "Contabilidade",
        "Comunicação e Expressão",
        "Calculo",
        "Linguagem de programação",
    ]);

const aluno2 = new Estudante("estudante2","estudante2@fatec.sp.gov.br",9876543219876,"Analise e desenvolvimento de Sistemas",[
        "Engenharia de Software",
        "Sistemas de Informação",
        "Inglês",
        "Contabilidade",
        "Comunicação e Expressão",
        "Calculo",
        "Linguagem de programação",
    ]);

aluno1.estprimeiradisciplina();
aluno1.estultimadisciplina();

aluno2.estprimeiradisciplina();
aluno2.estultimadisciplina();