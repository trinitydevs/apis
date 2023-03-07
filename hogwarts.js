//Função para o button

function guardaDados() {
    var formsCliente = new Object();

    formsCliente.nome = document.getElementById("nome").value;
    formsCliente.sobrenome = document.getElementById("sobrenome").value;
    formsCliente.contato = document.getElementById("contato").value;
    formsCliente.endereco = document.getElementById("endereco").value;
    formsCliente.especie = document.getElementById("especie").value;
    formsCliente.habilidade = document.getElementById("habilidade").value;
    formsCliente.idade = document.getElementById("idade").value;




//Converter para String JSON

var jsonForm = JSON.stringify(formsCliente);

//Exibir

console.log(formsCliente.valueOf());

document.getElementById("dados-nome").innerHTML = `<p>NOME: ` + formsCliente.nome + '</p>';
document.getElementById("dados-sobrenome").innerHTML = `<p>SOBRENOME: ` + formsCliente.sobrenome + '</p>';
document.getElementById("dados-contato").innerHTML = `<p>CONTATO: ` + formsCliente.contato + '</p>';
document.getElementById("dados-endereco").innerHTML = `<p>ENDEREÇO: ` + formsCliente.endereco + '</p>';
document.getElementById("dados-especie").innerHTML = `<p>ESPÉCIE: ` + formsCliente.especie + '</p>';
document.getElementById("dados-habilidade").innerHTML = `<p>HABILIDADE: ` + formsCliente.habilidade + '</p>';
document.getElementById("dados-idade").innerHTML = `<p>DATA DE NASCIMENTO: ` + formsCliente.idade + '</p>';

document.getElementById("enviar").remove();

swal("Matrícula realizada com sucesso. Bem-vindo a Hogwarts!");


// button.setAttribute("enviar") = disable;
//document.write(jsonForm);

}

function imprimir(){
    window.print("");
}