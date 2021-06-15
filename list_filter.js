//filtrar elementos que começa com a letra a

const lista = ["Arroz", "Batata","amora"];

const resultado = [];
/*
        //empurrar(enviar) + 1 elemento no final da lista
resultado.push("Mandioca")
console.log(resultado)
        //tirar + 1 elemento no final da lista
resultado.pop(resultado);
console.log(resultado)
*/
//para cada item da lista de compra
for (let item of lista){
    //Toda string pode ser trabalhada como array
    //ou seja você pode acessa as letrar 
    //como acessaria um item dentro da array
    if (item[0]== "a" || item[0]=="A"){
        resultado.push(item)
       
    }
}

/*for (let item of lista){
    if (item){
        resultado.push(item);
    }
}

console.log("itens da lista "+ lista)
console.log("itens de resultado "+ resultado)
*/

