console.log('connected');

//check off specific todos by clicking
$('ul').on('click', 'li', function(){
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
    // create a new li and add it to the ul
    $('ul').append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + '</li>');
  }
  
});