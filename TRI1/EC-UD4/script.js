let fruta = ["Sandía", "Melocotón", "Naranja"]
let comida = new Array ("Macarrones", "Ensalada" , "Carne", "Postre")

for (let index = 0; index < fruta.length; index++) {
    console.log ("La fruta de la posición 0" + index + " es " + fruta[index])
}

console.log ("La comida de la posición " + 2 + " es: " + comida[2])
console.log (comida.length)
console.log ("Push en el array para meter en última posición la palabra 'Patatas'")
comida.push("Patatas")
console.log (comida.length)
