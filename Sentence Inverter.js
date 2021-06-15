let texto = "Eu gosto da Cubos Academy";
//OBS: A palavra reservada "continue;" ela volta o laço para inicio
let palavra="";
let temp="";
let nova_frase="";
for (i=texto.length-1; i >= 0; i--){  
    palavra += texto[i] 
    if (texto[i]===" " || i==0){
        if (i==0){
            palavra +=" "
        }
        for (j=palavra.length-1; j >= 0; j--){ 
            temp += palavra[j] 
        }
        palavra=""; 
    }
}
console.log(temp);