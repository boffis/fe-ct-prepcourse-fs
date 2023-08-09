function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    fin = []
    arrayOfStrings.forEach ((x)=>{
       pal = x.split('')
       if (pal[0] == 'a'){
          fin.push(pal.join(''))
       }
    })
    return (fin)
}
hola = ['peste', 'arbol', 'bitch']

console.log (filter(hola))