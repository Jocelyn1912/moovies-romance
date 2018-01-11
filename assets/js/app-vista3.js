$(document).ready(function(){
 
 $('#send').click(function(){
    var inputWrite = $('#inputWrite').val();
    $('#printMessage').append('<div class="message">' + inputWrite + '</div>');
    $('#inputWrite').val('');
  });
 
  $('#heart li').on('mouseover', function(){
    console.log("hola");
    var onHeart = parseInt($(this).data('value'), 10); 
   
    $(this).parent().children('li.heart').each(function(e){
      if (e < onHeart) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.heart').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
 
  $('#heart li').on('click', function(){
    var onHeart = parseInt($(this).data('value'), 10); // The star currently selected
    var hearts = $(this).parent().children('li.heart');
    
    for (i = 0; i < hearts.length; i++) {
      $(hearts[i]).removeClass('selected');
    }
    
    for (i = 0; i < onHeart; i++) {
      $(hearts[i]).addClass('selected');
    }
  })
  
});
