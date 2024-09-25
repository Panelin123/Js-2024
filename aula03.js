//Alguns erros

let numero = 12 // O Java Scripit é sensivel ao capslock e não vai reconhcer se você escrever
//console.log(Numero) //Erro de declaração, váriavel não declarada

//console.log(nãoexiste //Erro de sintaxe; falta de parenteses

//Tratamento de erros

//console.error('A lista não está executando a média') //Declara um erro para o outro usuário

const idadeMinima = 18
let idadeCliente = 17

if(idadeCliente >= idadeMinima){
     console.log('Cerveja')
} else{
    console.log('Suco')
}

//Valor Ternário
idadeCliente = 20

//modo ternário, _______ <= ______ ? ------ : ------
//modo ternário, _______ == ______ ? ------ : ------
console.log(idadeCliente >= idadeMinima ? 'Cerveja' : 'Suco')
                   // => uma função arrow completamente diferente de maior igual

 //utilizar com cautela

 const nome = "Pedro"
 const idade = "16"
 const cidadeNascimento ="Berlin"

 const apresentacao = "Meu nome é" + nome + "Tenho" + idade + "anos e nasci em" +cidadeNascimento

 console.log(apresentacao)

 //Template string

 const apresentacaoII = `Sou o ${nome} e tenho ${idade} anos de idade. Nasci na cidade de ${cidadeNascimento}`

 console.log(apresentacaoII)