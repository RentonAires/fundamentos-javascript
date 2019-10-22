//Armazenando uma funaçao em uma variavel
const somaImprimida = function(a, b){
    console.log(a+b);
    
} 
somaImprimida(5,3)

//Armazenando uma funçao arrow em uma variavel
const soma =(a,b) => {
    return a + b;
}
console.log(soma(5, 5));

//Retrono implicito
const subtracao = (a,b) => a-b; //funçao em uma linha 
console.log(subtracao(5,2)); //chamando a funcao e passando os parametros

// funçao com retrno implici
const imprimir = a => console.log(a);
    imprimir('retrona implicito!!')




