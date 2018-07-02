function buildSignUpScreen() {
    $('#sign-in-screen').fadeOut("slow",function(){
        $('#root').html(SignUpScreen());
        initializeSignUpScreenEventListeners();
    });
}

function SignUpScreen() {
    const container = document.createElement('div');

    container.id = 'sign-up-screen';
    container.classList.add('sign-up-screen');

    container.innerHTML =`
    <div>
    <button class="go-back" id="go-back-btn">Go Back</button>
    </div>
    <div class="image">
        <img src="love-chat-icon.png" alt="">
    </div>

    <div class="sign-up-input">
        Name: <input id="name"></input>
        Email: <input id="email"></input>
        Password: <input id="password"></input>
        Confirm Password: <input id="confirnm-password"></input>
    </div>

    <div class="sign-up-btn">
        <button class="btn" id="sign-up-btn">Sign Up</button>    
    
        <button class="btn" id="google-auth">Google</button>
        <button class="btn" id="facebook-auth">Facebook</button>    

    </div>
`;
return container;
}

function initializeSignUpScreenEventListeners(){
    $('#google-auth').on('click', googleAuth);
    $('#facebook-auth').on('click', facebookAuth);

    $('#go-back-btn').on('click', goBack);

    $('#sign-up-btn').on('click', signUp);
}

function signUp(){

}