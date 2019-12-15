const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();


setTimeout(function(){
    $('#messages').fadeOut('slow');
}, 3000);