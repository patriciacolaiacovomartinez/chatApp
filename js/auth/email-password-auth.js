function signUp(){
    let name = $('#name').val();
    let email = $('#email').val();
    let password = $('#password').val();
    let passwordConfirmation = $('#password-confirmation').val();

    console.log('email', email)
    console.log('password ', password)
    console.log('passwordconfirmation', passwordConfirmation)

    if (!isValidaEmail(email)){
        alert('Invalid email')
    }
    else if (!isValidPassword(password)){
        alert('Invalid Password')
    }
    else if (password !== passworfConfirmation) {
        alert('Password do not match');
    }
    else {
        firebase.auth().createUserWithEmailAndPassword (email, password)
        .then(function (result){
            
            var user = firebase.auth().currentUser;

            user.updateProfile({
                displayName: name,
            }).then(function (){
                //update succesful
            }).catch(function (error){
                //an error happened.
            });
        })
        
        .catch(function (error){
            //handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    }
}

function emailAuthPasswordAuth(){
    let email = $('email').val();
    let password = $('#password').val();

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error){

        //Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert (errorMessage);
    })
}

