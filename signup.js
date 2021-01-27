// document.getElementById('Signup-btn').addEventListener('click', register);
// function register(e){
    
//     e.preventDefault();
//     var name=document.getElementByValue('label1').value;
//     var email=getInputValue('label2');
//     var password=getInputValue('label3');

//     firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((register) => {
//     // Signed in 
//     var user = register.name;
//     firebase.firestore().collection('register').add({
//         email: email,
//         name:name,
//         password:password,
//         schoolName:schoolName,
//         create:new Date()
//     // ...
//   }).then(res=>{alert('User Created');document.location ='index.html'}).catch(e=>console.log(e))
 

//   }).catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
// function getInputValue(id){
//     return document.getElementById(id).value;
//   }
// }