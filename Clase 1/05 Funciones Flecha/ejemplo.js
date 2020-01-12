function sumar(valor1,valor2){
    return valor1 + valor2;
}
console.log(sumar(10,20));

let sumarFlecha = (valor1,valor2) => valor1 + valor2;

console.log(sumarFlecha(29,90));

/*
funcion anonima definida tradicionalmente
var anon = function(){
}
*/

let cuadrado = valor => valor * valor;

let saludar = () => console.log("Hola");