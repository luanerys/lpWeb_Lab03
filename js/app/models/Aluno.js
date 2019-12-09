class Aluno {

    constructor() {
        this._turma = [];
    }

    adiciona(alunos) {
        this._turma.push(alunos);
    }

    get turma() {
        return [].concat(this._turma);
    }

}