$(document).ready(function(){
  

}

/** Función para crear registro de usuario en Firebase*/

function registrar(){
  var email= document.getElementById('email').value;
  var password= document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
    location.reload();
  }).catch(function(error) {
    /** Handle Errors here. */
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert(errorMessage)
  });
}

/** Función para identificar sign in en Firebase. */

function ingreso(){
  var email2= document.getElementById('email2').value;
  var password2= document.getElementById('password2').value;
  firebase.auth().signInWithEmailAndPassword(email2, password2).then(()=>{
    location.reload();
  }).catch(function(error) {
    /** Handle Errors here. */
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
}

/** Función de Firebase que observa qué sucede con el usuario, si se conectó o no, si existe verificación del email, etc. */

function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      aparece();
      console.log('existe usuario activo')
      useractive();
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      console.log('no existe usuario activo')
      nouser();
    }
  });
}

observador();