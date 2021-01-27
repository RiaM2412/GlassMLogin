document.getElementById('login-btn').addEventListener('click', submit);
function submit(e){
    e.preventDefault();
    var email=getInputValue('input-box');
    var password=getInputValue('input-box2');
    //signin function
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((submit) => {
        // Signed in
        var user = submit.email;
         
    alert('logged in');
    // document.location ='useraccess.html';
    //header("location:useraccess.html"); 
    
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    
    // return document.getElementById('useraccess');
    }
    function getInputValue(id){
        return document.getElementById(id).value;
      }
