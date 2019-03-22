console.log('connected');

const taskList = $('ul#taskList');
const singleTodo = $('ul#taskList > li');



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

// Toggle function to hide the input box when the + icon is clicked
$('.fa-plus').click(function() {
  $("input[type='text']").fadeToggle();
});



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
    console.log(current);
    
    // if (current === 0 || current === 2 || current === 3) 
    
    
    
    if (current===0 || current===2) {
      // h1Todo.css("background-color", "brown");
      h1Todo.toggleClass('UI-theme-brown');
    } else if (current===3) {
      // h1Todo.css("background-color", "brown");
      h1Todo.toggleClass('UI-theme-brown');
    } else if (current===4) {
      // h1Todo.css("background-color", "gray"); 
      h1Todo.toggleClass('UI-theme-darkgrey');
    } else if (current===5)
    h1Todo.toggleClass('UI-theme-multic');
  }
  changeUILink.on('click', nextBackground);



//   setInterval(nextBackground, 5000);
//   body.css('background-image', backgrounds[0]);
//   console.log( backgrounds );
// });

