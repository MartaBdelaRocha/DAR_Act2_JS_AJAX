function checkPalindromo(){

    var palabra = document.getElementById('palabra').value.toLowerCase();
    var rev = palabra.split('').reverse().join('');
    var resultado = '';

    if(palabra == ''){
        resultado = 'Debes escribir una palabra para comprobar';
    }else{
        if(palabra == rev){
            resultado = palabra+' es un palíndromo';
        }else{
            resultado = palabra+' NO es un palíndromo';
        }
    }    

    document.getElementById('resultadoPalindromo').innerHTML = resultado;
}

function checkNumeros(){

    var num1 = document.getElementById('n1').value;
    var num2 = document.getElementById('n2').value;

    if(num1=='' || num2 == ''){
        document.getElementById('resultadoNumeros').innerHTML = 'Escribe dos números para comparar';
    }else{
        if(num1 > num2){
            document.getElementById('resultadoNumeros').innerHTML = num1+' es mayor que '+num2;
        }else if(num1 < num2){
            document.getElementById('resultadoNumeros').innerHTML = num2+' es mayor que '+num1;
        }else{
            document.getElementById('resultadoNumeros').innerHTML = num1+' es igual que '+num2;
        }
    }   
}

function checkVocales(){

    var frase = document.getElementById('frase').value.toLowerCase();
    //Opción 1
    /*
    var vocales = 0;
    for(var char of frase){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            vocales++;
        }
    }
    */

    //Opción 2
    if(frase == ''){
        document.getElementById('resultadoVocales').innerHTML = 'Escribe una frase';
    }
    else{
        var vocales = frase.match(/[aeiou]/g);
        var totalVocales = vocales.length;
        document.getElementById('resultadoVocales').innerHTML = 'Hay '+totalVocales+' vocales en la frase: '+vocales;
    }   
}

function checkEachVocal(){

    var frase = document.getElementById('fraseDos').value.toLowerCase();
    var letraA = 0;
    var letraE = 0;
    var letraI = 0;
    var letraO = 0;
    var letraU = 0;
    
    if(frase == ''){

        document.getElementById('resultadoSumaVocales').innerHTML = 'Escribe una frase';

    }else{
        for(var char of frase){
    
            switch(char){          
                case 'a':
                    letraA++;
                    break;
                case 'e':
                    letraE++;
                    break;
                case 'i':
                    letraI++;
                    break;
                case 'o':
                    letraO++;
                    break;
                case 'u':
                    letraU++;
                    break;
            }
        }
    
        document.getElementById('resultadoSumaVocales').innerHTML = 'Repeticiones: letra A: '+letraA+', letra E: '+letraE+', Letra I: '+letraI+', Letra O: '+letraO+', Letra U: '+letraU;
    } 
}


//Versión 2

function checkPalindromoEmergente(){

    var palabra = prompt('Introduce una palabra','').toLowerCase();
    var rev = palabra.split('').reverse().join('');
    var resultado = '';

    if(palabra == ''){
        alert('Para comprobar el palíndromo debes escribir una palabra');
    }else{

        if(palabra == rev){
            resultado = palabra+' es un palíndromo';
        }else{
            resultado = palabra+' NO es un palíndromo';
        }
        alert(resultado);
    }    
}


function checkNumerosEmergente(){

    var num1=prompt('Número 1','');
    var num2=prompt('Número 2','');

    if(num1 == '' || num2 == ''){
        alert('Para comparar debes escribir dos números');
    }else{
        if(num1 > num2){
            alert(num1+' es mayor que '+num2);
        }else if(num1 < num2){
            alert(num2+' es mayor que '+num1);
        }else{
            alert( num1+' es igual que '+num2);
        }
    }    
}

function checkVocalesEmergente(){

    var frase = prompt('Escribe una frase','');
    //Opción 1
    /*
    var vocales = 0;
    for(var char of frase){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            vocales++;
        }
    }
    */

    //Opción 2
    if(frase == ''){
        alert('Para contar vocales debes escribir una frase');
    }else{

        var vocales = frase.match(/[aeiou]/g);
        var totalVocales = vocales.length;
        alert('Hay '+totalVocales+' vocales en la frase: '+vocales);

    }      
}

function checkEachVocalEmergente(){

    var frase = prompt('Escribe una frase','');
    var letraA = 0;
    var letraE = 0;
    var letraI = 0;
    var letraO = 0;
    var letraU = 0;
    
    if(frase==''){
        alert('Para contar vocales debes escribir una frase');
    }else{
        for(var char of frase){
    
            switch(char){          
                case 'a':
                    letraA++;
                    break;
                case 'e':
                    letraE++;
                    break;
                case 'i':
                    letraI++;
                    break;
                case 'o':
                    letraO++;
                    break;
                case 'u':
                    letraU++;
                    break;
            }
        }
    
        alert('Repeticiones: letra A: '+letraA+', letra E: '+letraE+', Letra I: '+letraI+', Letra O: '+letraO+', Letra U: '+letraU);
    }   

}