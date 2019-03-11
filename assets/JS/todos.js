console.log('connected');

//check off specific todos by clicking
$('li').click(function(){
    // if li is gray. Be careful to use the rgb color reference otherwise it won't work if we use the simple color name.
    if($(this).css('color') === 'rgb(128, 128, 128)') {
        $(this).css({
            color: 'black',
            textDecoration: 'none'           
        });
    } 
    
    else {
        $(this).css({
            color: 'gray',
            textDecoration: 'line-through'
        });
    }
});

