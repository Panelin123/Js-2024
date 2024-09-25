//Funções

let x = 'nada'

console.log(x)

x = 'oi'
imprimeTexto(x)
console.log(x)

//Declarar uma função
//estrutura nomeDaFunção (parametros) {funcionalidades}
function imprimeTexto(texto){
    console.log(texto)
}

imprimeTexto('Sou alemão com orgulho viva Berlin!')
imprimeTexto('Batatinha')

function soma(){
    return 2+456
}
imprimeTexto(soma())
//console.log(soma())

//Função de dois parametros
function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}

imprimeTexto(somaDeNumeros(10,8))

function divisaoDeNumeros(numero1, numero2){
    return numero1 / numero2
}

imprimeTexto(divisaoDeNumeros(10,2))
imprimeTexto(divisaoDeNumeros(2, 10))

//Ordens de parametros

function apresentacao(nome, idade){
    return `Meu nome é $(nome) e tenho $(idade) anos`
}
//imprimeTexto(apresentacao(Pedro, 16))
//imprimeTexto(apresentacao(16, Pedro)) //A ordem dos parametros é importante



//Parametro inicial, para que a função comece com um parametro pré definido
function multiplicacao(n1 = 1, n2 = 1){
    return n1 * n2
}

imprimeTexto(multiplicacao(2, 35))