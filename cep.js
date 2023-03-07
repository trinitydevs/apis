fetch("http://viacep.com.br/ws/08090290/json/").then(response =>{
    return response.json();

}).then(corpo => {
    //console.log(corpo)
    document.getElementById("rua").value = corpo.logradouro;
    document.getElementById("estado").innerHTML = corpo.uf;
})