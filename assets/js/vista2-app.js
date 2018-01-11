$(document).ready(function(){

	console.log(data);


	
	for (var i = 0 ;i < data.Family.length ; i++){
	
$('.main').append('<div class="wrapper vista-first">' +
									' <div class="row">'+
									'<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+
									'<div class="view"> '+
									'<img class= " " src="'+data.Comedy[i].Poster +'" alt="">'+
									'<h2>'+ data.Comedy[i].Title
									+'</h2>'
									+'</div>' 
									+'</div>' 
									+'</div>'
									+'</div>');
	};

	

})