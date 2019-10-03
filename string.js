const escola = "cod3r"

console.log(escola.charAt(2)) //retona o caracter do indice da string
console.log(escola.charAt(5))

console.log(escola.charCodeAt(3))

console.log(escola.indexOf('d'))//retornao numero da posiçao da string no indice
console.log(escola.substring(1)) //todo os caracteres depois do indice 1
console.log(escola.substring(1, 3)) 
console.log('Escola ' .concat(escola).concat("!")) //concatenaçao de Strings
console.log('Escola '+ escola +"!")
console.log(escola.replace(3, 'e'))//substitui o indice pela string
console.log('renato,ana,jose,pedro'.split(','))// passa a string para um array