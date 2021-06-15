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

        //concatenação
let people1= people._name + " tem " + people.age + " anos"
console.log(people1)

if (people.age <18){
 console.log(people._name + " é menor de idade")
} else if(people.age <60){
        // template
console.log($`{people._name} é adulto de ${people.age} anos.`) // usa acrases em vez de aspas
} else{
    console.log(people._name + " é idosa")
}
