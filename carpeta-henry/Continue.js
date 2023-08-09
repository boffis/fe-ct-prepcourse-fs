function invertir (string) {
    invertido = []
    div = string.split ([])
    largo = div.length - 1
    for (i = 0; i < div.length; i++) {
       invertido [i] = div [largo]
       largo = largo - 1
    }
    final = invertido.join ([])
    return (final)
 }

 console.log (invertir ('hello world!'))

 
