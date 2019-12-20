class AlunoView extends View {

    constructor(elemento) {
        super(elemento);
    }

    _template(aluno) {

            return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>ALUNO</th>
                        <th>FREQUÊNCIA</th>
                        <th>NOTA 1</th>
                        <th>NOTA 2</th>
                        <th>NOTA 3</th>
                        <th>FINAL</th>
                        <th>MÉDIA FINAL</th>
                        <th>SITUAÇÃO</th>
                    </tr>
                </thead>
            
                <tbody>
                    ${aluno.turma.map(alunos => `
                        
                        <tr>
                            <td>${alunos.nome}</td>
                            <td>${alunos.frequencia}</td>
                            <td>${alunos.n1}</td> 
                            <td>${alunos.n2}</td> 
                            <td>${alunos.n3}</td> 
                            <td>${alunos.n4}</td> 
                            <td>${alunos.media}</td>
                            <td>${alunos.situacao}</td>
                        </tr>
                        
                    `).join('')}                
                </tbody>
                <tfoot>
                    <td>Total de alunos aprovados: ${aluno.turma.filter(alunos => alunos.situacao == 'Aprovado(a)').length}</td>
                    <td>Total de alunos reprovados: ${aluno.turma.filter(alunos => alunos.situacao == 'Reprovado(a)').length}</td>
                    <td>Média da Turma: ${aluno.turma.map(alunos => alunos.media).reduce((a,b)=> a+b,0)/aluno.turma.length || 0}</td>
                </tfoot >
            </table>
        `;
    }
  
}
