// Milestone 1

// Definire un array di oggetti; ogni oggetto rappresenta un gatto, 
// che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(), stampare in pagina tutti i gattini, 
// ciascuno con il proprio colore e il proprio nome.

// Milestone 2

// Dividere i gatti in due contenitori distinti in base al sesso e 
// aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se 
// femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue 
// se il gatto è più giovane, più scuro se il gatto è più vecchio.

// Milestone 3

// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i 
// gattini maschio, inserendo solamente nome e colore e colore e opacità del 
// fiocco per ogni gatto.

const cats= [
    {
        nome: 'Whiskey',
        eta : '10',
        colore : 'rosso',
        sesso : 'maschio'
    },
    {
        nome: 'Mrs. Poor',
        eta : '25',
        colore : 'Grigio',
        sesso : 'femmina'
    },
    {
        nome: 'Micia',
        eta : '2',
        colore : 'giallo',
        sesso : 'femmina'
    },
    {
        nome: 'Leo',
        eta : '5',
        colore : 'nero',
        sesso : 'maschio'
    },
    {
        nome: 'Leone',
        eta : '15',
        colore : 'nero',
        sesso : 'maschio'
    }
];

let maschi= [];
let femmine= [];

cats.forEach((item) => {
    if(item.sesso == 'maschio' && item.eta < 10){
        $('ul#cats').append('<li>'+`${item.nome}  è di colore ${item.colore}`+'<i class="blue fas fa-cat"></i>'+ '</li>')
    }else if (item.sesso == 'maschio' && item.eta >= 10){
        $('ul#cats').append('<li>'+`${item.nome}  è di colore ${item.colore}`+'<i class="blue-scuro fas fa-cat"></i>'+ '</li>')
    }else if (item.sesso == 'femmina' && item.eta >= 10){
        $('ul#cats').append('<li>'+`${item.nome}  è di colore ${item.colore}`+'<i class="pink-scuro fas fa-cat"></i>'+ '</li>')
    }else if (item.sesso == 'femmina' && item.eta < 10){
        $('ul#cats').append('<li>'+`${item.nome}  è di colore ${item.colore}`+'<i class="pink fas fa-cat"></i>'+ '</li>')
    }
    
    
});
