$(document).ready(function(){

	console.log(data);
	//llenando contenedores con peliculas del genero Drama
	for (var i = 0 ;i < data.Drama.length ; i++){
		$('.main').append('<div class="wrapper vista-first">' +
											' <div class="row">'+
											'<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+
											'<div class="view"> '+
											'<img class= " " src="'+data.Drama[i].Poster +'" alt="">'+
											'<div class="mask">'+
											'<h2>'+ data.Drama[i].Title
											+'</div>'
											+'</h2>'
											+'</div>' 
											+'</div>' 
											+'</div>'
											+'</div>');
			};

	
	//llenando contenedores con peliculas del genero Comedy
	for (var i = 0 ;i < data.Comedy.length ; i++){
		$('.main').append('<div class="wrapper vista-first">' +
											' <div class="row">'+
											'<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+
											'<div class="view"> '+
											'<img class= " " src="'+data.Comedy[i].Poster +'" alt="">'+
											'<div class="mask">'+
											'<h2>'+ data.Comedy[i].Title
											+'</div>'
											+'</h2>'
											+'</div>' 
											+'</div>' 
											+'</div>'
											+'</div>');
			};

	
		//llenando contenedores con peliculas del genero Biography
		for (var i = 0 ;i < data.Biography.length ; i++){
			$('.main').append('<div class="wrapper vista-first">' +
												' <div class="row">'+
												'<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+
												'<div class="view"> '+
												'<img class= " " src="'+data.Biography[i].Poster +'" alt="">'+
												'<div class="mask">'+
												'<h2>'+ data.Biography[i].Title
												+'</div>'
												+'</h2>'
												+'</div>' 
												+'</div>' 
												+'</div>'
												+'</div>');
				};

})