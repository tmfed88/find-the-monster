import img from "/images/door.svg";
import "../style.css";

let app = document.querySelector('#app');

let monsters = [
    'monster1',
    'monster2',
    'monster3',
    'monster4',
    'monster5',
    'monster6',
    'monster7',
    'monster8',
    'monster9',
    'monster10',
    'monster11',
    'sock'
];

let shuffle = array => {

    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// Shuffle the monsters array
shuffle(monsters);

app.innerHTML = '<div class="row">' + monsters.map((monster, index) => {
    let html =
        '<div class="grid">' + 
            `<button data-monster-id="${index}">` +
                `<img alt="${monster}" src="${img}">` +
            '</button>' +
        '</div>';
    return html; 
}).join('') + '</div>';