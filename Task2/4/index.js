
function prime(n){
pr:for (var i = 2; i <= n; i++) {

  for (var j = 2; j < i; j++) {
    if (i % j == 0)  continue pr;
  }

  console.log( i ); 
}
}
prime(100);
    