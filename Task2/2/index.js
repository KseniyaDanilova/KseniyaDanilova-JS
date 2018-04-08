
var Str = prompt("Введите строку: ");

function letters() {
    console.log(Str);
    var result = [];

    for (var i = 0; i < Str.length; i++) {
        if ((Str[i].charCodeAt() >= 97) && (Str[i].charCodeAt() <= 122)) {
            result[i] = Str[i].toUpperCase();
        } else if ((Str[i].charCodeAt() >= 65) && (Str[i].charCodeAt() <= 90)) {
            result[i] = Str[i].toLowerCase();
        } else result[i] = Str[i];
    }
    return result.join('');
}

console.log(letters());