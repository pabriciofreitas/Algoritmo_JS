// só terá as letras CUBADEMY 
// Criptografia será tráveis das duas lletras @ e #
//cada letra é combinação de 3 caracter 
//Entrada tem que ter no máximo 100 caracter, tem que ser
//string e só receberá @ e #
const letras=['C','U', 'B','A','D','E','M','Y']
const caracter=['###','##@','#@#','#@@','@##','@#@','@@#','@@@']
/*
for (let i=0; i<=letras.length-1;i++){
    console.log(`${letras[i]}=${caracter[i]}`)
}*/
function decodificador(frase) { 
    if (frase.length <= 100){
        console.log('passou pelo tamanho da frase')
        for (let i of frase){
            let entrada = false;
            if (i=="@" || i=="#"){
                entrada = true;
            }
        }
        if (entrada==true){
            console.log('passou da verificação de caracter')

        }
    }
}