const people = [
{
name:"josé",
age: 30
},
{
name:"Maria",
age: 16
},
{
name:"Pedro",
age: 18
},
]

const resposta = {
    qtd_maiores:0,
    qtd_menores:0,
    perc_maiores:0,
    perc_menores:0
}
//console.log(people.length)
for (let i of people) {
    if (i.age>=18 ){
        resposta.qtd_maiores+=1
    }else{
        resposta.qtd_menores+=1
    }
    resposta.perc_maiores= (resposta.qtd_maiores/people.length) *100
    resposta.perc_menores= (resposta.qtd_menores/people.length) *100
}
console.log(resposta)