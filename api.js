//Criando um array para alocar os dados de uma API

const integrante1 = '{"nome1": "Murdoc", "idade1": 54, "alter1": "Baixista"}'

const dados1 = JSON.parse(integrante1);

document.getElementById("nome1").innerHTML = dados1.nome1;
document.getElementById("idade1").innerHTML = dados1.idade1 + ' anos';
document.getElementById("alter1").innerHTML = dados1.alter1;

console.log(dados1);

// ---------------------------------------

const integrante2 = '{"nome2": "Noodle", "idade2": 30, "alter2": "Guitarrista"}'

const dados2 = JSON.parse(integrante2);

document.getElementById("nome2").innerHTML = dados2.nome2;
document.getElementById("idade2").innerHTML = dados2.idade2 + ' anos';
document.getElementById("alter2").innerHTML = dados2.alter2;

console.log(dados2);

// ---------------------------------------

const integrante3 = '{"nome3": "2D", "idade3": 42, "alter3": "Vocalista e Pianista"}'

const dados3 = JSON.parse(integrante3);

document.getElementById("nome3").innerHTML = dados3.nome3;
document.getElementById("idade3").innerHTML = dados3.idade3 + ' anos';
document.getElementById("alter3").innerHTML = dados3.alter3;

console.log(dados3);

// ---------------------------------------

const integrante4 = '{"nome4": "Russel", "idade4": 45, "alter4": "Baterista"}'

const dados4 = JSON.parse(integrante4);

document.getElementById("nome4").innerHTML = dados4.nome4;
document.getElementById("idade4").innerHTML = dados4.idade4 + ' anos';
document.getElementById("alter4").innerHTML = dados4.alter4;

console.log(dados4);

// ---------------------------------------
