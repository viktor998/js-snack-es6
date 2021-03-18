// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo 
// nomi e falli subiti e stampiamo tutto in console.

let nome = ['Palermo', 'Catania', 'Milan'];
let punti = [];
let falli = [];
let arrayCompleto = [];
let nomeFalli = [];

const nomeSquadra = 'nome';
const puntiFatti = 'punti';
const falliSubiti = 'falli';
randomGen();

for (let i = 0; i < nome.length; i++) {
    // let nomeS = 'nomeSquadra';
    // let falliS = 'falliSquadra'
    const squadraCalcio={
        [nomeSquadra] : nome[i],
        [puntiFatti] : punti[i],
        [falliSubiti] : falli[i]
    };

    var nomeS = squadraCalcio.nome;
    var falliS = squadraCalcio.falli;
    console.log(nomeS, falliS);
    // arrayCompleto.push(squadraCalcio);
}

// for (var i = 0; i < arrayCompleto.length; i++) {
//     console.log(arrayCompleto[i])
 
//     for (var j = 0; j < arrayCompleto[i].length; j++) {
//         var {nomeC, falliC} = arrayCompleto;
        
        
        
//     }
//     console.log(nomeC, falliC);
    
// }


function randomGen(){
    for (let i = 0; i < nome.length; i++) {
        let numRandom = Math.floor(Math.random() * ( 20 - 1 + 1));
        punti.push(numRandom);
    }

    for (let i = 0; i < nome.length; i++) {
        let numRandom = Math.floor(Math.random() * ( 20 - 1 + 1));
        falli.push(numRandom)
    }
    
    
}

