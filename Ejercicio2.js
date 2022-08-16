
function Validacion(text) {
    var re = /[^A-Za-z0-9]/g;
    text = text.toLowerCase().replace(re, '');
    var len = text.length;
    let arregloPalindromos = [];
    for (var i = 4; i <= len; i++) {
        for (var j = 0; j < len; j++) {
            newText = text.substring(j, i);
            let resultado = palindrome(newText)
            if (resultado) {
                arregloPalindromos.push(newText)
            }
        }
    }
    arregloPalindromos = arregloPalindromos.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      })
    console.log('el total de palindromos son: ' + arregloPalindromos.length);
    console.log('los palindromos encontrados son: ' + arregloPalindromos)
}

function palindrome(textPalindromo) {
    if (textPalindromo.length > 3) {
        let reverse = textPalindromo.split('').reverse().join('');
        if (reverse === textPalindromo) {
            return true;
        }
    }
    return false;
}

Validacion('anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero')