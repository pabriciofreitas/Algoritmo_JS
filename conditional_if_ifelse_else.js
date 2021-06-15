const people = {  
    _name: "Pabricio",
    age:20,
    ehMaiorDeIdade:true,
    altura:1.80
};
/* 
>=
<=
>
<
==(verifica apenas conteudo)
!=(diferente)
===(verificar se conteudo e tipo) 
!==(verificar se conteudo e tipo não é identico)*/
if (people.age <18){
 console.log("A pessoa é menor de idade")
} else if(people.age <60){
 console.log("A pessoa é adulta")
} else{
    console.log("A pessoa é idosa")
}
