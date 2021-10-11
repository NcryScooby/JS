let a = 'Vermelho';
let b = 'Azul'

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

////

let horario = 22;

if (horario >= 6 && horario <= 12){
    console.log('Bom dia!');
} else if (horario > 12 && horario <= 18){
    console.log('Boa Tarde!');
} else {
    console.log('Boa noite!');
}

////

let permissao = 'comum';

switch (permissao){
    case 'comum':
    console.log('Usuário Comum!');
    break;

    case 'gerente':
    console.log('Usuário Gerente!');
    break;

    case 'diretor':
    console.log('Usuário Diretor!');
    break;

    default:
    console.log('Usuário não reconhecido!');
}

////

for (let i = 1; i <= 5; i++){
    if (i % 2 == 0){
        console.log(i, 'É número par!');
    } else {
        console.log(i, 'É número ímpar')
    }
}

console.log('////////////////')

////
let i = 1;

while (i <= 5){
    if (i % 2 == 0){
        console.log(i, 'É número par!');
    } else {
        console.log(i, 'É número ímpar')
    }
    i++;
}

console.log('/////////////////');

/////

let j = 1;

do{
    console.log('Digitando' , j);
    j++;
} while (j <= 10)

console.log('/////////////////');


///// for-in

const pessoa = {
    nome: 'Fabrício',
    idade: '21'
}

for (let chave in pessoa){
    console.log(chave, pessoa['nome']);
}

console.log('//////////////////');

//// for-of

const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores){
    console.log(cores[indice]);
}

console.log('///////////////');

/////

for (let cor of cores){
    console.log(cor);
}

console.log('//////////////////');

///////


function maior (numero1, numero2) {
    if (numero1 > numero2){
        console.log(numero1, 'É maior que', numero2);
    } else {
        console.log(numero2, 'É maior que', numero1);
    }
}

maior((80), (55));

console.log('//////////////////////');  

///////

let valorMaior = max(51, 55);
console.log(valorMaior);

//  function max(n1, n2){
//    if (n1 > n2){
//        return n1;
//    } else {
//        return n2;
//    }
//  }

function max(n1, n2){
    return n1 > n2 ? n1 : n2;
}

/////// fizzBuzz

// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Divisivel por 3 e por 5 => fizzBuzz
// Não divisivel por 3 e por 5 => número
// Não é um número => não é um número

// const resultado = fizzBuzz(15);
// console.log(resultado);

// function fizzBuzz(entrada){
//    if (entrada % 3 == 0){
//        return 'fizz';
//    } else if (entrada % 5 == 0){
//        return 'Buzz';
//    } else if (entrada % 3 == 0 && entrada % 5 == 0){
//        return 'fizzBuzz';
//    } else if (entrada % 3 != 0 && entrada % 3 != 0){
//        return entrada;
//    } else {
//        return 'Não é um número';
//    }
//}

console.log('////////////////////');

////////

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){

    if (typeof entrada !== 'number'){
        return 'Não é um número'
    } else if ((entrada % 3 === 0) && (entrada % 5 === 0)){
        return 'fizzBuzz';
    } else if (entrada % 3 === 0){
        return 'fizz';
    } else if (entrada % 5 === 0){
        return 'Buzz';
    } else if (entrada % 3 !== 0 && entrada % 3 !== 0){
        return entrada;
}
}

console.log('/////////////////////');

/////////

/* function verificarVelocidade (velocidade){
    if (velocidade <= 70){
        return 'Velocidade permitida';
    } else if (velocidade > 70 && velocidade < 75){
        return '1 ponto na carteira';
    } else if (velocidade >= 75 && velocidade < 80){
        return '2 pontos na carteira'
    } else if (velocidade >= 80 && velocidade < 85){
        return '3 pontos na carteira'
    } else if (velocidade >= 85 && velocidade < 90){
        return '4 pontos na carteira'
    } else if (velocidade >= 90 && velocidade < 95){
        return '5 pontos na carteira'
    } else if (velocidade >= 95 && velocidade < 100){
        return '6 pontos na carteira'
    } else if (velocidade >= 100 && velocidade < 105){
        return '7 pontos na carteira'
    } else if (velocidade >= 105 && velocidade < 110){
        return '8 pontos na carteira'
    } else if (velocidade >= 110 && velocidade < 115){
        return '9 pontos na carteira'
    } else if (velocidade >= 115 && velocidade < 120){
        return '10 pontos na carteira'
    } else if (velocidade >= 120 && velocidade < 125){
        return '11 pontos na carteira'
    } else if (velocidade >= 125 && velocidade < 130){
        return '12 pontos na carteira'
    } else {
        return 'Carteira suspensa';
    }
    
} */

const res = verificarVelocidade(120);

function verificarVelocidade (velocidade){

    const valorVelocidadeMaxima = 70;
    const kmPorPonto = 5;
    const velocidadeUltrapassada = 12;

    if (velocidade <= valorVelocidadeMaxima){
        console.log('Velocidade permitida');
    } else {
        const pontos = Math.floor(((velocidade - valorVelocidadeMaxima) / kmPorPonto));
        if (pontos >= velocidadeUltrapassada){
            console.log('Carteira Suspensa');
        } else {
            console.log('Pontos', pontos);
        }
    }
}

///////////////////////

exibirTipo(20);

function exibirTipo(limite){

    for (let a = 1; a <= limite; a++){
    if (a % 2 === 0){
        console.log(a, 'Par');
    } else {
        console.log(a, 'Ímpar');
    }
    }
}