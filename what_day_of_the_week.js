//que dia da semana será daqui a x dia
// hojé é domingo

// SOLUÇÃO OTIMIZADA minha + do teacher
function diaDaSemana(dia) {
    const resto = dia % 7;
    const semana=["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    console.log("Será "+ semana[resto])
}

diaDaSemana(8)


// MINHA SOLUÇÃO
/*
function whatDayOfTheWeek (dia){
    const semana=["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    while (dia >= 7){
        dia=dia-7
    }  
    console.log("Será " + semana[dia])
}

whatDayOfTheWeek(26);
*/