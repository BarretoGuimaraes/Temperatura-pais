let chave = "be6836a0c62847e164a26368171a1b5e"

 function colcoarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " +dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".ceu").innerHTML = dados.weather[0].description
    document.querySelector(".clima").innerHTML = "Umidade :" + dados.main.humidity
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

 }
 
 async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())
        colcoarNaTela(dados)
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}