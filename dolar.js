fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
  .then((resposta) => {
    return resposta.json();
  })
  .then((economia) => {

   
    console.log(economia);
    document.getElementById("dolar").innerHTML = "$ " + economia.USDBRL.bid;
    document.getElementById("codigo").innerHTML = economia.USDBRL.code;
    document.getElementById("nome").innerHTML = economia.USDBRL.name;

    function converter(){
        var valor = parseFloat(document.getElementById("valor-dolar").value); 
        var conversao = valor * economia.USDBRL.bid;
        document.getElementById("resultado").innerHTML = "O valor em dólar é " + conversao;
        console.log(conversao)
    }

  });
