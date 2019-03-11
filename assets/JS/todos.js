console.log('connected');

//check off specific todos by clicking
$('li').click(function(){
    alert('clicked LI');
     $(this).css('color', 'gray');
});