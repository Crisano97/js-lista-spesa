//Data una lista della spesa, stampa su pagina gli elementi della lista individualmente con un ciclo while;

// creo il mio array con gli elementi della spesa;
const shopLift = [
    'Nutella',
    'Pane',
    'Uova',
    'Pecorino',
    'Pancetta',
    'Pepe',
    'Olio'
];

//seleziono l'elemento del DOM nel quale voglio aggiungere gli elementi della lista della spesa;
const shoppingList = document.getElementById('shopping-list');
/*
//ciclo for;
//ciclo gli elementi dell'array;
for ( i = 0; i < shopLift.length; i++) {
    console.log(shopLift[i]);

    //creo gli elementi che andranno inseriti nel mio HTML;
    const listElement = document.createElement('li');
    //inserisco le stringhe del mio array negli elementi creati, in base alla loro posizione index;
    listElement.innerText = shopLift[i];

    //inserisco gli elementi creati all'interno del mio elemento del DOM;
    shoppingList.append(listElement);
}
*/

//ciclo while;
let i = 0;

while (i < shopLift.length) {
    console.log(shopLift[i]);

    const listElement = document.createElement('li');
    listElement.innerText = shopLift[i];
    listElement.classList.add('border-bottom', 'border-dark')

    shoppingList.append(listElement);

    i++;
}
