//CHANGE BACKGROUND IMAGE once "Change UI" button is clicked

const body = $('body');
const backgrounds = [
    'url(assets/photos/bck1.jpg)',
    'url(assets/photos/bck2.jpg)',
    'url(assets/photos/bck3.jpg)',
    'url(assets/photos/bck4.jpg)',
    'url(assets/photos/bck5.jpg)',
    'url(assets/photos/bck6.jpg)',
];
var current = 0;
const h1Todo = $('#toDoBox h1');
const changeUILink = $('#change-ui-link');

function nextBackground() {
    body.css('background-image', backgrounds[current = ++current % backgrounds.length]);

    // if (current===0 || current===2 || current===3 ) {
    //     h1Todo.removeClass('UI-theme-multic');
    //     h1Todo.removeClass('UI-theme-blue');
    //     h1Todo.addClass('UI-theme-brown');
    // } else if (current===1) {
    //     h1Todo.removeClass('UI-theme-brown');
    //     h1Todo.addClass('UI-theme-blue');
    // } else if (current===4) {
    //     h1Todo.removeClass('UI-theme-brown');
    //     h1Todo.addClass('UI-theme-darkgrey');
    // } else if (current===5) {
    //     h1Todo.removeClass('UI-theme-darkgrey');
    //     h1Todo.addClass('UI-theme-multic');
    // }

    switch(current) {
        case 0, 2, 3:
            h1Todo.removeClass('UI-theme-multic');
            h1Todo.removeClass('UI-theme-blue');
            h1Todo.addClass('UI-theme-brown');
            break;

        case 1:
            console.log("current is 1");
            h1Todo.removeClass('UI-theme-brown');
            h1Todo.addClass('UI-theme-blue');
            break;

        case 4:
            h1Todo.removeClass('UI-theme-brown');
            h1Todo.addClass('UI-theme-darkgrey');
            break;

        case 5:
            h1Todo.removeClass('UI-theme-darkgrey');
            h1Todo.addClass('UI-theme-multic');
            console.log("current is 5");
            break;
    }
}

changeUILink.on('click', nextBackground);



// Vanilla JS version

// const body = document.querySelector('body');
// const backgrounds = [
//     'url(assets/photos/bck1.jpg)',
//     'url(assets/photos/bck2.jpg)',
//     'url(assets/photos/bck3.jpg)',
//     'url(assets/photos/bck4.jpg)',
//     'url(assets/photos/bck5.jpg)',
//     'url(assets/photos/bck6.jpg)',
// ];
// let current = 0;
// const h1Todo = document.querySelector('#toDoBox h1');
// const changeUILink = document.querySelector('#change-ui-link');

// function nextBackground() {
//     body.css('background-image', backgrounds[current = ++current % backgrounds.length]);
//     console.log(current);
//         if (current === 0 || current === 2) {
//             h1Todo.className = 'UI-theme-brown';
//         } else if (current === 1) {
//             h1Todo.className = 'UI-theme-blue';
//         } else if (current === 3) {
//             h1Todo.className = 'UI-theme-brown';
//         } else if (current === 4) {
//             h1Todo.className = 'UI-theme-darkgrey';
//         } else if (current === 5) {
//             h1Todo.className = 'UI-theme-multic';
//         }
// }

// changeUILink.addEventListener("click", nextBackground)
