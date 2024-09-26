/* Exercícios de interpretação

1.
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

Pelo que entendi, ao criar uma function e utilizar o return ele vai interromper a execução da função. No return ele pede que multiplique por 5, depois peço que imprima a multiplicação da função por 2 e depois por 10. Se caso não tivesse os dois consoles, ele não apareceria em nenhum lugar, só multiplicaria sem ser impresso.

2.
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

Essa função tem a utilidade de pedir que o usuário insira um texto "prompt" e com esse texto inserido, ela pede que verifique se é true or false que a cenoura aparece no texto e que depois imprima no console a resposta.

Nas 3 entradas do usuário, todas vão ficar minúsculas, I e II darão true e somente a III dará false pois está em plural.*/

// Exercícios de escrita

// 1.

function infosMinhas() { 
        console.log( "Eu sou Milena, tenho 24 anos, moro em São Leopoldo e sou estudante." )
}
infosMinhas()

const NOME = "Milena"
const IDADE = 24
const ENDEREÇO = "São Leopoldo"
const PROFISSAO = "estudante"

function sobreMim(aa, bb, cc, dd) {
	console.log("Sou a", aa, "tenho", bb, "anos", "moro em", cc, "e sou" , dd)
}
sobreMim(NOME, IDADE, ENDEREÇO, PROFISSAO)

//2.

function somaNumeros(numero01, numero02) {
	const soma = numero01 + numero02
	console.log(soma)
}
somaNumeros(4, 5)

function comparação(número01, número02) {
	const igual = número01 >= número02
	console.log(igual)
}
comparação(3, 10)

function númeroPar(par) {
	const parNumero = par % 2 === 0
	console.log(parNumero)
}
númeroPar(6)

const temp = "chovendo"
const objeto = "guarda chuva"
function frase(a, b) {
	console.log("Hoje está", a, "tenho que pegar meu", b)
	console.log(frase.length)
}
frase(temp, objeto)