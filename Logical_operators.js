const people = {  
    _name: "Pabricio",
    age:9,
    heigth:1.33,
    havePassport: false, 
};

// Minimum age 12
// minimum heigth 1.40 

// só com oque aprendeu até antes de ensinar operadores logicos

/*if (people.age >=12){
    if (people.heigth >= 1.40){
        console.log("Pode brincar no brinquedo")
    }else{
        console.log("Não pode brincar no brinquedo")
    }
}else{
    console.log("Não pode brincar no brinquedo")
}
*/

//logical-operators
//&& == and
//|| == or
//!  == not
/* 
>=
<=
>
<
==(verifica apenas conteudo)
!=(diferente)
===(verificar se conteudo e tipo) 
!==(verificar se conteudo e tipo não é identico)*/

// Minimum age 12
// minimum heigth 1.40 
/*
if (people.age >= 12 && people.heigth >= 1.40){
    console.log(`${people._name} pode brincar no brinquedo`);        
} else{
    console.log(people._name+ " não pode brincar no brinquedo")
}
*/

// if Minimum age 12 or minimum heigth 1.40 

/*
if (people.age >= 12 || people.heigth >= 1.40){
    console.log(`${people._name} pode brincar no brinquedo`);        
} else{
    console.log(people._name+ " não pode brincar no brinquedo")
}
*/

// negar um negação == verdade
// negar uma verdade == false
if (!people.havePassport){
    console.log(people._name + " pode viajar")
}else{
    console.log(people._name + " não pode viajar")
}

if (!people.havePassport){
    console.log("BARRADO")
}