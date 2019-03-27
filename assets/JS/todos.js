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

// create a new todo List
const toDoBox = $('#toDoBox');
const newList = document.createElement('toDoBox');
const newTodoButton = $('#new-to-do-link');
const body = $('body');

function addNewToDo(body, newList) {
  console.log('addNewToDo clicked');
  body.append(newList);
}

newTodoButton.on('click', addNewToDo);

