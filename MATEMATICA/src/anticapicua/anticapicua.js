console.log('Hola Mundo');

console.log('Probando Números anticapicúas');

const numeroMaxIteraciones = 100;
const numeroInicial = 4234;

function calculaInversoNumero(numero) {
    let numeroInverso = 0;
    let resto = 0;
    let modulo = numero;
    while(modulo >= 1){
        numeroInverso = numeroInverso*10 + modulo%10;
        modulo = (modulo - modulo%10)/10;
    }
    return numeroInverso;
}

function validarCapicua(numero) {
    let capicua = false;
    if (numero == calculaInversoNumero(numero)){
        capicua =  true;
    }
    return capicua;
}

function buscarCapicua (numero, numeroMaxIteraciones) {
    let iteraciones = 1;
    let numeroFormado = numero;
    while (iteraciones <=  numeroMaxIteraciones) {
        let numeroInverso = calculaInversoNumero(numeroFormado);
        let numeroInicial = numeroFormado;
        numeroFormado = numeroInicial + numeroInverso;
        console.log(`Iteración número  ${iteraciones}`);
        console.log(`numeroFormado: (${numeroInicial} + ${numeroInverso}) => ${numeroFormado}`);
        console.log('***************************************************');
        if (validarCapicua(numeroFormado)){
            console.log(`Se consiguió un número capicúa en la iteración ${iteraciones}`);
            console.log(`numeroFormado: ${numeroFormado}`);
            return true;
        }
        iteraciones++;
    }
}

buscarCapicua(numeroInicial, numeroMaxIteraciones);
// const numeroInverso = calculaInversoNumero(numeroInicial);

// console.log(`numeroInverso Salida: ${numeroInverso}`);


