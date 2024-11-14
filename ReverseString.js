function reverseString (reverseN) {
    var reverseName = "";
    for(var i=reverseN.length -1 ; i >= 0 ; i--) {
        reverseName += reverseN[i] ;
    }
    return reverseName ;
}

console.log(reverseString("Rosine")) ;
