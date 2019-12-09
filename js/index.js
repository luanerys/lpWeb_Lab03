var campos = [
    document.querySelector('#nome'),
    document.querySelector('#frequencia'),
    document.querySelector('#n1'),
    document.querySelector('#n2'),
    document.querySelector('#n3'),
    document.querySelector('#n4')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault();

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = '';
    campos[2].value = '';
    campos[3].value = '';
    campos[4].value = '';
    campos[5].value = '';

    campos[0].focus();

});