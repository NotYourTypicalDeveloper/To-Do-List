console.log('connected');

//check off specific todos by clicking
$('li').click(function(){
  $(this).toggleClass('completed');
});

