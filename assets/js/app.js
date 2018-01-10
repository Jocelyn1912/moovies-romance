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
      location('')
    }).catch(function(error) {
      /** Handle Errors here. */
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
    })
   

	// Rescatar inormación del formulario crear perfil
	$('#btnRegister').click(function(){
    var email= document.getElementById('email').value;
    var password= document.getElementById('password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
      console.log('si lo registro')
    }).catch(function(error) {
      /** Handle Errors here. */
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage)
    });
  })
  
})    

function cargaDatos(){
       //console.log("Usuario: "+sessionStorage['usuarioLogueado']) 

        var usuarios = db.ref('usuarios');
        usuarios.on('value',function(ss){
          var usuario = ss.val();
          var indice=0;
          usr = Object.keys(usuario);
                for(i=0; i<usr.length; i++){
                  if(usr[i] == sessionStorage['usuarioLogueado'])
                  {
                      indice = i;
                  } 
                }

                //console.log(usuario[usr[indice]].correo)
                $('#nombre').text(usuario[usr[indice]].nombre);
                 $('#nac').text(usuario[usr[indice]].nacionalidad);

                
          })

    }

/* //Llamanso al modal de registro de usuario
$(document).ready(function(){
   */
 



 
