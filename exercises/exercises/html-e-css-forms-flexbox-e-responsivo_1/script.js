function gerarEstado() {
    let estado = document.getElementById("estado").value;
    let options = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

    for (let index = 0; index < options.length; index ++ ) {
        let creatEstados = document.createElement('option');
        estado.appendChild(creatEstados).innerHTML = creatEstados[index];
        estado.appendChild(creatEstados).value = creatEstados[index];
    }
}