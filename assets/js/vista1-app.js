/*Función que busca en la api por títulos y muestra el poster*/

$(document).ready(function () {
  $('#searchBtn').click(searchMovie);
  function searchMovie () {
    var titleText = $('#title').val();
    var url = "https://www.omdbapi.com/?apikey=852159f0&s=" + titleText;
    console.log(url);
    $.ajax({
      url: url,
      success: renderMovies,
      error: renderError
    });
  }
});

function renderMovies (response) {
  console.log('El objeto es: ' + response);

  var movies = response.Search;
  var resultsUl = $('#results');
  resultsUl.empty();
  for (var i in movies) {
    var movie = movies[i];
    var title = movie.Title;
    var imdbID = movie.imdbID;
    var poster = movie.Poster;
    console.log(movie);
    var liMovie = $('<li class="list-group-item"></li>');
    var posterImg = $('<img src="' + poster + '"width="100%"/>');
    liMovie.append(posterImg);
    liMovie.append(title);
    liMovie.click(renderDetails);
    resultsUl.append(liMovie);
  }

  function renderDetails() {
    console.log('render details');
  }
}

function renderError (error) {
  console.log(error);
}