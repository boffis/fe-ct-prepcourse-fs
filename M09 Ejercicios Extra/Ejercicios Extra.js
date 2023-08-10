/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   keys = Object.keys (objeto)
   final =[]
   keys.forEach ((prop)=>{
      caract = objeto[prop]
      fuck = [prop, caract]
      final.push (fuck)
   })
   return (final)
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
jumble = string.split([])
jumble = jumble.sort ()
final = {}
jumble.forEach ((letra)=>{
   if(final.hasOwnProperty (letra)){
      final[letra]++
   } else {
      final[letra] = 1
   }
})
return(final)
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   finlow = []
   finup = []
   word = string.split ([])
   word.forEach ((letter)=>{
      if(letter == letter.toUpperCase()){
         finup.push(letter)
      }else{
         finlow.push(letter)
      }
   })
   finlow = finlow.join([]) 
   finup = finup.join([])
   return (finup + finlow)
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   words = frase.split(' ')
   fin = []
   words.forEach((word)=>{
      reverse = []
      letters = word.split('')
      letters.forEach((letra)=>{
         reverse.unshift(letra)
      })
   fin.push (reverse.join(''))
   })
   return (fin.join(' '))
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   x = numero.toString()
   array = x.split('')
   largo = array.length - 1
   bool = true
   for (i = 0 ; i<array.length ; i++) {
      if (array[i] != array[largo]){
         bool = false
      }
      largo = largo - 1
   }
   if (bool){
      return 'Es capicua'
   } else { 
      return 'No es capicua'
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   letras = string.split('')
   fin = []
   letras.forEach((letra)=>{
      switch (letra){
         case 'a':
            break;
         case 'b':
            break;
         case 'c':
            break;
         default:
            fin.push (letra)
            break;
      }
   })
   return (fin.join(''))
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   //  Tu código:
   arrayOfStrings.sort((primerString,SegundoString) =>{
      return  (primerString.length - SegundoString.length)
   })
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var fin = []
   array1.forEach(element1 =>{
      array2.forEach(element2=>{
         if(element1===element2 && !fin.includes(element1)){
            fin.push(element1)
         }
      })
   })
   return(fin)

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
