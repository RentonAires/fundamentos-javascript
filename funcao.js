/**
 * funçoes sem retorno
 */
function imprimirSoma(a,b){
    console.log(a + b);  
};

imprimirSoma(7, 12);
imprimirSoma(2)
imprimirSoma(2, 13, 4 ,5)
imprimirSoma()

//funcao com retorno
function soma(a, b = 1){
    return a + b;
}
console.log(soma(2, 3));// chamando a funçao e passando os parametros
console.log(soma(2));

