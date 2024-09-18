// Tipo Number

//Var era utilizado para todas as variaveis.
var numero01 = 3
//Let é uma atualizacao do var e é passivel a variação
let numero02 = 10
//Const é uma maneira de declarar uma váriavel que permanecerá constante
const numero03 = 7

const soma = numero01 + numero02
const subtracao = numero03 - numero02
const multiplicacao = numero01 * numero03
const divisao = numero02 / numero01

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)

// Tipo float -- Ponto flutuante

const numero04 = 3.2
const numero05 = 0.5

const operacaoFlutuante = numero01 / numero04

console.log(operacaoFlutuante)

// NeN -> Não é um número

const meuNome = "Pedro"
const FalsoNUMERO = "7"

const NaoEnumero = meuNome * numero05
const concatenacao01 = FalsoNUMERO + numero04

console.log (NaoEnumero)
console.log (FalsoNUMERO)

//Dados tipo String = Textos

const texto1 = "Meu nome é"
const texto2 = "O Pedro é lindo, não é?"

const concatenacao02 = texto1 + meuNome

console.log(concatenacao02)
console.log(texto2)

//Dados tipo Boleano
//True -->Verdadeiro
//False --> Falso

const numero06 = 7

const comparacao01 = numero06 == FalsoNUMERO
const comparacao02 = numero06 === FalsoNUMERO

// 1 sinal de (=) é para declarar
// 2 sinais de (==) comparando os valores e não o tipo do dado, (comparação fraca)
// 3 sinais de (===) comparando os tipos do dado(comparação forte)

console.log(comparacao01)
console.log(comparacao02)
