console.log("scripy.js");
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("logindiv").style.display = "none";
        document.getElementById("logoutdiv").style.display = "block";
    } else {
        document.getElementById("logindiv").style.display = "block";
        document.getElementById("logoutdiv").style.display = "none"  ;
    }
  });
function loginData(){
    var userName = document.getElementById("user name").value;
    console.log(userName);
    var password = document.getElementById("Password").value;
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(userName, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode+":"+errorMessage);
      });
}
function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}