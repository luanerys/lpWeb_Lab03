class NotasController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputNome = $('#nome');
        this._inputFrequencia = $('#frequencia');
        this._inputN1 = $('#n1');
        this._inputN2 = $('#n2');
        this._inputN3 = $('#n3');
        this._inputN4 = $('#n4');

        this._aluno = new Aluno();

        this._alunoView = new AlunoView($('#js-alunoView'));
        this._alunoView.update(this._aluno);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#js-mensagem-view'));
        this._mensagemView.update(this._mensagem);

    }

    adiciona(event) {

        event.preventDefault();

        let notas = this._criaAlunoNotas();
        this._aluno.adiciona(notas);
        this._alunoView.update(this._aluno);

        this._limpaFormulario();


        this._mensagem.texto = `Aluno(a) ${notas.nome} teve suas notas incluídas com sucesso.`;
        this._mensagemView.update(this._mensagem);
    }

    _criaAlunoNotas() {
        return new AlunoNotas(
            this._inputNome.value,
            this._inputFrequencia.value,
            this._inputN1.value,
            this._inputN2.value,
            this._inputN3.value,
            this._inputN4.value
        );
    }

    _limpaFormulario() {
        this._inputNome.value = '';
        this._inputFrequencia.value = "";
        this._inputN1.value = "";
        this._inputN2.value = "";
        this._inputN3.value = "";
        this._inputN4.value = "";

        this._inputNome.focus();
    }
}