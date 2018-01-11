// Initialize Firebase
var usuarioLogueado="";
  
var config = {
  apiKey: "AIzaSyAYEf2TDzCkrncJdGxvW7PyOeO3YMwH9IU",
  authDomain: "moovies-ac833.firebaseapp.com",
  databaseURL: "https://moovies-ac833.firebaseio.com",
  projectId: "moovies-ac833",
  storageBucket: "moovies-ac833.appspot.com",
  messagingSenderId: "35128960062"
};
firebase.initializeApp(config);
var db = firebase.database();


$(document).ready(function(){
  $('.carousel').carousel()

  $("#btnLogin").click(function(){
    
    var email2= document.getElementById('email2').value;
    var password2= document.getElementById('password2').value;
    firebase.auth().signInWithEmailAndPassword(email2, password2).then(()=>{
      location.replace('vista1.html');
    }).catch(function(error) {
      /** Handle Errors here. */
      var errorCode = error.code; 
      var errorMessage = error.message;
      alert(errorMessage);
      alert(error.code);
      // ...
    });
    })
   

	// Rescatar inormación del formulario crear perfil
	$('#btnRegister').click(function(){
    var email= document.getElementById('email').value;
    var password= document.getElementById('password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
    location.replace('vista1.html');
    }).catch(function(error) {
      /** Handle Errors here. */
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage);
      alert(error.code);
    });
  })
 
 $('#send').click(function(){
        var inputWrite = $('#inputWrite').val();
        $('#printMessage').append('<div class="message">' + inputWrite + '</div>');
        $('#inputWrite').val('');
  });
 


}) 


