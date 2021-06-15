const listaDeCompras = ["arroz", "Batata", "Maça"];
/*
for (let item = 0; listaDeCompras[item]!="Maça";item++ ){ 
    console.log(item)    
} */

/*
index= 0
while (listaDeCompras[index] != "Maça"){
    console.log(index);
    index++
}*/


for (let item  of listaDeCompras){
    console.log("verificando Item " + item)
    if (item === "Batata"){
        console.log("Batata está na lista")
        break; //interonper um loop
    }
}

