const nome  = 'rentao';
const concatenacao = 'ola ' + nome + '!'; //concatenaçao feita de modo tradicinal
 const templade =`
    Olá
    ${nome}!
    `
    /**
     * templade string 
     * para concatenaçao de string
     */
    const templade2 = `oi...! ${nome} ! ` // templade para entrega de string
    
    console.log(concatenacao, templade, templade2 );


    //expressoes
    console.log(`1 + 1 = ${1+1}`);

    const up = texto => texto.toUpperCase()
    console.log(`ei.. ${up('cuidado')}!`)