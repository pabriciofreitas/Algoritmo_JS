//Cupom RANGOBARATO
//Apenas das 12h as 13:59(14h não pode)
//Se tiver cupom e estiver dentro do horário, tem 10% de descontos
//se além disso, a compra for 100 reias ou mais, desconto de 20%

function print_discout(buy_value, hour,coupon){
    
    if (coupon === "RANGOBARATO") {
        if (hour >=12.00 && hour <=13.59){
            if (buy_value >=100.00){
                console.log("Seu desconto foi de "+ buy_value*0.20)
            } else if(buy_value>0.00 && buy_value<100.00){
                console.log("Seu desconto foi de "+ buy_value*0.10)
            } else{
                console.log("valor de comprar inválido")
            }   
        } else{
            console.log("O cupom só é válido das 12h00 as 13h59")
        }  
   
    }else{
        console.log("Cupom Inválido!!")
    }
}
print_discout(100.00, 12.00, "RANGOBARATO")