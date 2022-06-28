console.log('JS OK')
/*
Consegna (traccia generica):
Creato un array contenente una lista di cinque immagini tra quelle fornite, 
creare un carosello ispirandoci alle foto in allegato.
(non è necessario che la grafica sia IDENTICA alla traccia, non bloccatevi su questo, 
    date un aspetto decente e concentriamoci sulla logica.
Cerchiamo di lavorare seguendo i seguenti step in ordine:
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo 
l'immagine grande in modo da poter stilare lo slider; avremo così la struttura base 
e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente 
servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una 
stringa con un template literal oppure utilizzare gli altri metodi di manipolazione 
del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo 
stesso slider, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello 
slider, prendendo il posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la 
prima e 
l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà 
l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso 
avanti, deve attivarsi la prima immgine.
BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza 
l’immagine equivalente a quella attiva, scegliete liberamente se scurire le altre 
immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, 
quella corrispondente all'immagine attiva deve evidenziarsi, scegliete voi 
l'effetto estetico, potete colorarla diversamente rispetto alle altre o 
aggiungere un semplice bordo.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma 
analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. 
Abbiamo completato ormai da qualche settimana la sessione HTML e CSS, se non 
ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non 
dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista 
il focus dell'esercizio.
*/




// MILESTONE 2
const source = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg", "img/07.jpg", "img/08.jpg", "img/09.jpg", "img/10.jpg"];

const carousel = document.getElementById('carousel');
const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');

let imageElement = '';

for (let i = 0; i < source.length; i++) {
    imageElement += `<img src=${source[i]} alt="landscape ${i}" />`;
}

carousel.innerHTML = imageElement;

const images = document.querySelectorAll('#carousel img');
console.log(images);


let currentActiveIndex = 0;

images[currentActiveIndex].classList.add('active');


// MILESTONE 3 + Bonus 1
nextButton.addEventListener('click', function () {
    images[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;

    if (currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }

    images[currentActiveIndex].classList.add('active');
})


backButton.addEventListener('click', function () {
    images[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;

    if (currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }

    images[currentActiveIndex].classList.add('active');
})
