

function desencriptar(){
    var cadena  = document.getElementById("cajadetexto").value;

        cadena = cadena.replace(/ai/g, 'a');
        cadena = cadena.replace(/enter/g, 'e');
        cadena = cadena.replace(/imes/g, 'i');
        cadena = cadena.replace(/ober/g, 'o');
        cadena = cadena.replace(/ufat/g, 'u');
        
    var textooutput = document.getElementById("encriptado");
    textooutput.value = cadena;
    console.log(cadena);
}
function encriptar(){
    var cadena  = document.getElementById("encriptado").value;

        cadena = cadena.replace(/a/g, 'ai');
        cadena = cadena.replace(/e/g, 'enter');
        cadena = cadena.replace(/i/g, 'imes');
        cadena = cadena.replace(/o/g, 'ober');
        cadena = cadena.replace(/u/g, 'ufat');
        
    var textooutput = document.getElementById("encriptado");
    textooutput.value = cadena;
    console.log(cadena);
}