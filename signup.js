document.getElementById('Signup-btn').addEventListener('click', register);
function register(e){
    
    e.preventDefault();
    var name=getInputValue('input-box1');
    var email=getInputValue('input-box2');
    var password=getInputValue('input-box3');

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((register) => {
    // Signed in 
    var user = register.name;
    firebase.firestore().collection('user').add({
        email: email,
        name:name,
        password:password,
        create:new Date()
    // ...
  }).then(res=>{alert('User Created');document.location ='index.html'}).catch(e=>console.log(e))
 

  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

}
function getInputValue(id){
    return document.getElementById(id).value;
  }