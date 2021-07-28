
//Sesion SW2js 1
//Reto 1: Operadores condicionales
const time = 13;
let greeting;
if (time < 12) {
    greeting = "Good morning";
}
if (time < 20) {
    greeting = "Good afternoon";
}
if (time >= 24) {
    greeting = "Good evening";
}
console.log(greeting) // Good afternoon
const diameter = 1.6
const thickness = 0.6

const diametro = (diameter, thickness)
{
    if (diameter > 1.4) {
        console.log('La rueda es para un vehículo grande');
    } else if (diameter <= 1.4 && diameter > 0.8) {
        console.log('La rueda es para un vehículo mediano');
    } else {
        console.log('La rueda es para un vehículo pequeño');
    }
    if (diameter > 1.4 && thickness < 0.4 || diameter <= 1.4 && diameter > 0.8 && thickness < 0.25) {
        console.log('El grosor para esta rueda es inferior al recomendado');
    }
}

switch (true) {
    case (time < 12):
        greeting = "Good morning";
        break;
    case (time < 20):
        greeting = "Good afternoon";
        break;
    case (time <= 24):
        greeting = "Good evening";
        break;
}


//Reto 2: Números pares
console.log("Números pares")
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0)
    {console.log(i)}
}


//Reto 3: Números primos
console.log("Números primos")
for(let i = 0; i <= 100; i++){
    if(i % 2){console.log(i)}
}


//Sesiones DW2js 2

//Reto 1: Calcular promedio

const num = [5, 3, 4, 7, 2, 1, 9, 7, 7]
const result = (num) => {
    let sum = 0;

    for (let i = 0; i < num.length; i++){
        sum = sum + num[i]
    }
    return sum / (num.length)
}

resultado = result(num)
console.log("Promedio: " + resultado);


//Reto 2: Arreglo a objeto
const obj = () => {
    let array = {};
    const car = [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
    car .forEach(function (itm){
        array[itm[0]] = itm[1];
    });
    console.log(array);
}

//Reto 3: Objetos anidados
const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
        web: {
            blog: 'https://johndoe.com'
        },
        social: {
            facebook: 'https://facebook.com/john.doe',
            instagram: 'https://instagram.com/john.doe'
        }
    }
}

const { links } = person;
const { social } = links;
const { facebook, instagram } = social;
console.log(facebook);
console.log(instagram);


//Reto adicional
//Unir el array 1, 2 y 3, para después sumar todos los números que sean primos

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const calificaciones = {
    array3:[11, 12, 13, 14, 15]
};

const myArray = [...array1, ...array2, ...calificaciones.array3];
console.log(myArray);
let suma = 0;

for (let i = 2; i < myArray.length; i++){
    let esPrimo = true;

    for(let j = 2; j <= i; j++){
        if (i % j === 0 && j !== i){
            esPrimo = false;
        }
    }

    if (esPrimo){
        suma += i;
    }
}

console.log(suma);