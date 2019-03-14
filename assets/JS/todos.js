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

$('.fa-plus').click(function() {
  $("input[type='text']").fadeToggle();
});

// change background every 5 minutes
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

