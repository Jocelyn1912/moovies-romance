$(document).ready(function(){
//console.log(data);
$('div.mask').on('click', (event) => {
	console.log('hice click foto');

})


	$('#dropdownMenu1').on('change', function(){
			var selection = $('#dropdownMenu1').val();
	
			if(selection === 'Drama'){
				$('.main').empty();
				console.log('seleciono drama')
			//llenando contenedores con peliculas del genero Drama
				for (var i = 0 ;i < data.Drama.length ; i++){
					$('.main').append('<div class="wrapper vista-first">' +
											' <div class="row">'+
											'<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+
											'<div class="view"> '+
											'<img class= " " src="'+ data.Drama[i].Poster +'" alt="">'+
											'<a href="vista3.html" value =' + data.Drama[i].imdbID + '"><div class="mask">'+
											'<h2>'+ data.Drama[i].Title +
											+'</h2>'
											+'</div></a>'
											+'</div>' 
											+'</div>' 
											+'</div>'
											+'</div>');
				};
			}

			if(selection === 'Comedia'){
				console.log('selecciono comedy');
				$('.main').empty();
					//llenando contenedores con peliculas del genero Comedy
				for (var i = 0 ;i < data.Comedy.length ; i++){
					$('.main').append('<div class="wrapper vista-first">' +
											' <div class="row">'+
											'<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+
											'<div class="view"> '+
											'<img class= " " src="'+data.Comedy[i].Poster +'" alt="">'+
											'<a href=""><div class="mask">'+
											'<h2>'+ data.Comedy[i].Title
											+'</h2>'
											+'</div></a>'
											+'</div>' 
											+'</div>' 
											+'</div>'
											+'</div>');
			};
			}

			if(selection === 'Biografia'){
				console.log('selecciono biografia');
				$('.main').empty();
				//llenando contenedores con peliculas del genero Biography
				for (var i = 0 ;i < data.Biography.length ; i++){
					$('.main').append('<div class="wrapper vista-first">' +
												' <div class="row">'+
												'<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+
												'<div class="view"> '+
												'<img class= " " src="'+data.Biography[i].Poster +'" alt="">'+
												'<a href=""><div class="mask">'+
												'<h2>'+ data.Biography[i].Title
												+'</h2>'
												+'</div></a>'
												+'</div>' 
												+'</div>' 
												+'</div>'
												+'</div>');
				};

			}

			if(selection === 'Familiar'){
				console.log('selecciono familiar');
				$('.main').empty();
				//llenando contenedores con peliculas del genero Family
				for (var i = 0 ;i < data.Family.length ; i++){
					$('.main').append('<div class="wrapper vista-first">' +
												' <div class="row">'+
												'<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+
												'<div class="view"> '+
												'<img class= " " src="'+data.Family[i].Poster +'" alt="">'+
												'<a href=""><div class="mask">'+
												'<h2>'+ data.Family[i].Title
												+'</h2>'
												+'</div></a>'
												+'</div>' 
												+'</div>' 
												+'</div>'
												+'</div>');
				};

			}


			if(selection === 'Fantasia'){
				console.log('selecciono fantasia');
				$('.main').empty();
				//llenando contenedores con peliculas del genero Family
				for (var i = 0 ;i < data.Fantasy.length ; i++){
					$('.main').append('<div class="wrapper vista-first">' +
												' <div class="row">'+
												'<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">'+
												'<div class="view"> '+
												'<img class= " " src="'+data.Fantasy[i].Poster +'" alt="">'+
												'<div class="mask">'+
												'<h2>'+ data.Fantasy[i].Title
												+'</h2>'
												+'</div>'
												+'</div>' 
												+'</div>' 
												+'</div>'
												+'</div>');
				};

			}

	})
	

		
		

})