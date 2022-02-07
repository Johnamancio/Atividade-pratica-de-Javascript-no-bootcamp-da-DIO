function soma(n1,n2){
    var som = n1 + n2;
    return som
       
}    


function number(n1,n2){
     if(n1 === n2){
        if(soma(n1,n2) >= 10 && soma(n1,n2) <= 20){
            console.log('Os numeros ' + n1 + ' e ' + n2 + ' são iguais. Sua soma é ' + soma(n1,n2) + ', que é maior que 10 e menor que 20.')   
        }
        else{
            console.log('Os numeros ' + n1 + ' e ' + n2 + ' são iguais. Sua soma é ' + soma(n1,n2) + ', que é menor que 10 e menor que 20.')
        }
     }else {
        if(soma(n1,n2) >= 10 && soma(n1,n2) <= 20){
            console.log('Os numeros ' + n1 + ' e ' + n2 + ' não são iguais. Sua soma é ' + soma(n1,n2) + ', que é maior que 10 e menor que 20.')   
        }
        else{
            console.log('Os numeros ' + n1 + ' e ' + n2 + ' não são iguais. Sua soma é ' + soma(n1,n2) + ', que é menor que 10 e menor que 20.')
        }
        
     }
     
}
number(1,2);



