alert("Os valores podem estar sujeitos a mudanças")
var valorEmLibraTexto = prompt("Qual o valor em Libra que você deseja converter em Dólar Americano?")
var valorEmLibraNumero = parseFloat(valorEmLibraTexto)


var valorEmDolar = valorEmLibraNumero * 1.39
var valorEmDolarFixado = valorEmDolar.toFixed(2)

alert(valorEmDolarFixado)

