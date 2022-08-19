
function Validacion(text) {
    var re = /[^A-Za-z0-9]/g;
    text = text.toLowerCase().replace(re, '');
    var len = text.length;
    let arregloPalindromos = [];
    for (var i = 0; i <= len; i++) {
        for (var j = 0; j < len; j++) {
            palindrome(text.substring(j, i)) && arregloPalindromos.push(text.substring(j, i))
        }
    }
    arregloPalindromos = arregloPalindromos.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      })
    console.log('el total de palindromos son: ' + arregloPalindromos.length);
    console.log(arregloPalindromos)
}

function palindrome(textPalindromo) {
    if (textPalindromo.length > 3) {
        return (textPalindromo.split('').reverse().join('') === textPalindromo);
    }
    return false;
}

Validacion('anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero')