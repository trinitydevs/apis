//Método fetch() para buscar o arquivo dados.json transformando o resultado um objeto usando o método response json

fetch('dados.json')
.then(response => response.json())
.then(body =>{

    //Acessando os dados do objeto json e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML

    document.getElementById('imagem').innerHTML = body.rock.image;
    document.getElementById('nome').innerHTML = body.rock.name;
    document.getElementById('disco').innerHTML = body.rock.album;
    document.getElementById('estilo').innerHTML = body.rock.style;
    document.getElementById('preco').innerHTML = body.rock.price;

    document.getElementById('imagem1').innerHTML = body.rock2.image;
    document.getElementById('nome1').innerHTML = body.rock2.name;
    document.getElementById('disco1').innerHTML = body.rock2.album;
    document.getElementById('estilo1').innerHTML = body.rock2.style;
    document.getElementById('preco1').innerHTML = body.rock2.price;

    document.getElementById('imagem2').innerHTML = body.rock3.image;
    document.getElementById('nome2').innerHTML = body.rock3.name;
    document.getElementById('disco2').innerHTML = body.rock3.album;
    document.getElementById('estilo2').innerHTML = body.rock3.style;
    document.getElementById('preco2').innerHTML = body.rock3.price;
})



