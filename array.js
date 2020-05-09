const valores = [7.7, 6.6, 9.9, 8.9, 5, 'renato']; //array de valores
console.log(valores);

console.log(valores[1],  valores[3]);

console.log(valores[4]);// valor underfined para indice inexistente

valores[4] = 10.3; //atribuindo valor a um indice do array

console.log(valores);
console.log(valores.length);//exibindo a ultima posiçao do array


/*
O metodo push() adiciona um ou mais elementos ao final do array
e retorna o novo comprimento desse array
*/
valores.push({id:3}, false, null, 'teste'); 
console.log(valores);

console.log(valores.length);

/*
o metodo pop() remove o ultimo elemento de uma matriz
*/
console.log(valores.pop()); //

console.log(valores);
console.log(valores.length); //O length verifica o tamanho de um objeto ou array

delete valores [0]; //deletando valor do indice
console.log(valores);

console.log(typeof valores); // typeof retorna um objeto