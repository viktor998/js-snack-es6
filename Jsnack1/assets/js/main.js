// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal


let modello = ['MountainBike', 'BMX', 'Lombardo'];
let peso = [15, 10, 25];

let modelloPeso = [];

const nomeBici = 'modello';
const pesoBici = 'peso'; 


for (let i = 0; i < modello.length; i++) {
    const biciObject={
        [nomeBici] : modello[i],
        [pesoBici] : peso[i]
    }
    modelloPeso.push(biciObject);
}



console.log(modelloPeso);

let min = modelloPeso[0].peso;
let index = 0;

for (var i = 0; i < modelloPeso.length; i++) {
    if(modelloPeso[i].peso < min){
        min = modelloPeso[i].peso;
        index = i;
    }
    
}

console.log('la bici piu leggera è la:' , modelloPeso[index].modello)