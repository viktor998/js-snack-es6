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


// MILESTONE 3
// Creare un nuovo array con prima tutti i gattini femmina e poi tutti i 
// gattini maschio, inserendo solamente nome e colore e colore e opacità del 
// fiocco per ogni gatto.
let maschi= [];
let femmine= [];
cats.filter((element)=>{
    if(element.sesso == 'femmina'){
        femmine.push(`nome : ${element.nome}  colore  : ${element.colore}`)
    }else{
        maschi.push(`nome : ${element.nome}  colore  : ${element.colore}`)
    }
});

console.log(femmine, maschi);

for (let i = 0; i < femmine.length; i++) {
    console.log(femmine[i])
    const template = $('.template li').clone();
    $('.cats-m3.femmine').append(template);
    template.children('i.black').mouseenter(function(){
        
        for (let j = 0; j < femmine[i].length; j++) {
            $(this).siblings().show();
            $(this).siblings().html('<p>'+femmine[i]+'</p>')
            
        }
        $('.cats-m3 i').mouseleave(()=>{
            $('.info').hide();
        })
    })
}

for (let i = 0; i < maschi.length; i++) {
    const template = $('.template li').clone();
    $('.cats-m3.maschi').append(template);
    template.children('i.black').mouseenter(function(){
        
        for (let j = 0; j < maschi[i].length; j++) {
            $(this).siblings().show();
            $(this).siblings().html('<p>'+maschi[i]+'</p>')
            
        }
        $('.cats-m3 i').mouseleave(()=>{
            $('.info').hide();
        })
    })
}


    
    


