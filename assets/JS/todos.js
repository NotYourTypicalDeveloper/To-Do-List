console.log('connected');

const taskList = $('ul#taskList');
const singleTodo = $('ul#taskList > li');
console.log(singleTodo);

//check off specific todos by clicking
taskList.on('click', 'li', function(){
  $(this).toggleClass('completed');
});

//click on X to delete Todo
$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
    //grab new todo text from the input
    let todoText = $(this).val();
    $(this).val('');
    console.log(todoText);
    // create a new li and add it to the todo list
    taskList.append("<li><span><i class='far fa-trash-alt'></i></span>" + todoText + '</li>');
  }
});

$('.fa-plus').click(function() {
  $("input[type='text']").fadeToggle();
});

// ============= Animation of the BURGER MENU NAVBAR ============

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle nav
    nav.classList.toggle('nav-active');
    });

    // animate links 
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link,style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`
      }
  });
}

navSlide();


// jQuery version but does not work? 
// $(document).ready(function() {
//   const burger = $('.burger');
//   const nav = $('.nav-links');
  
//   function toggleBurger() {
//     nav.toggleClass('.nav-active');
//   }

//   burger.on('click', toggleBurger());
// });




// CHANGE BACKGROUND IMAGE EVERY SECOND
// $(function() {
//   const body = $('body');
//   const backgrounds = [
//    'url(assets/photos/bck1.jpg)',
//    'url(assets/photos/bck2.jpg)',
//    'url(assets/photos/bck3.jpg)',
//    'url(assets/photos/bck4.jpg)',
//    'url(assets/photos/bck5.jpg)',
//   ];
//   var current = 0;

//   function nextBackground() {
//     body.css('background-image', backgrounds[current = ++current % backgrounds.length]);
//     console.log(current);
//   }

//   setInterval(nextBackground, 5000);
//   body.css('background-image', backgrounds[0]);
//   console.log( backgrounds );
// });

