class AlunoNotas {

    constructor(nome, frequencia, n1, n2, n3, n4, media, mediaFinal) {

        this._nome = nome;
        this._frequencia = frequencia;
        this._n1 = n1;
        this._n2 = n2;
        this._n3 = n3;
        this._n4 = n4;
        this._media = (parseFloat(this._n1) + parseFloat(this._n2) + parseFloat(this._n3)) / 3;
        this._mediaFinal = (parseFloat(this._media) + parseFloat(this._n4)) / 2;

        Object.freeze(this);
    }

    get situacao() {

        if (this._frequencia < 75 || this._media < 3 || this._mediaFinal < 5) {
            return "Reprovado(a)";

        } else if (this._media > 3 && this._media < 7 && this._n4 == 0) {
            return "Prova Final";

        } else
            return "Aprovado(a)";
    }

    get media() {
        if (this._n4 !== 'undefined' && this._n4 !== null && this._n4 !== '') {
            return this._mediaFinal.toFixed(1);

        } else {
            return this._media.toFixed(1);
        }
    }

    get nome() {
        return this._nome;
    }

    get frequencia() {
        return this._frequencia;
    }

    get n1() {
        return this._n1;
    }

    get n2() {
        return this._n2;
    }

    get n3() {
        return this._n3;
    }

    get n4() {
        return this._n4;
    }
}