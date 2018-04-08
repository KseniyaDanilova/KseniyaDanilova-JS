
var Arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];


function NewArr() {
    var Del = [null,0,'',false,NaN,undefined];
    for (var i = 0; i < Del.length; i++) {
        var idx = Arr.indexOf(Del[i]);
        if (idx != -1) { Arr.splice(idx, 1); }
    }
    console.log(Arr);
}

NewArr();