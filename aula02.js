let forma = "retangulo";
let base = 20;
let altura = 40;
// let arearetangulo = altura * base;
// let areatriangulo = altura * base /2;
let area;

//Condicional Se... Então...

if( forma === 'retângulo' ){
    console.log (area);
} else{ 
    area = (altura * base) / 2;
    console.log(area)
}

//Boolean
const UsuarioLigado = true;
const ContaPaga = false;

//Truthy ou Falsy
//0 -> false
//1 -> true

console.log(0 == false); // retorna verdadeiro(true)
console.log('' == false); //retorna verdadeiro
console.log(1 == true); //retorna verdadeiro

console.log(ContaPaga == 1);

//undefined --> indefinido;
//nell --> vazio ou nulo;

let ninhavar;
let varnull = null;
let numero = 3;
let string = 'oi';

console.log(typeof ninhavar);
console.log(typeof varnull);
console.log(typeof numero);
console.log(typeof string)

//conversão implicita

const numeroNumber = 786
const numeroString = "786"

console.log(numeroNumber == numeroString) //comparando os valores
console.log(numeroNumber === numeroString) //comparando os tipos
console.log(numeroNumber + numeroString) // Conversão implícita (concatenação de string)

//conversão explicita

console.log(numeroNumber + Number(numeroString))

const numeroConvertido = Number(numeroString)

console.log(numeroNumber + numeroConvertido)

const numeroConvertidoErrado = Number("456b")

console.log(numeroNumber + numeroConvertidoErrado)