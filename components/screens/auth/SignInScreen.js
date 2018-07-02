function buildSignInScreen() {
   $('#loading-screen, #sign-up-screen, #chat-screen').fadeOut("fast", function (){
       $('#root').html(signInScreen());
       initializeSignInScreenEventListeners();
   })
}

function signInScreen() {
    const container = document.createElement('div');
    container.id = 'sign-in-screen';
    container.classList.add('sign-in-screen');

    const googleAuthBtn = document.createElement('div');

    const facebookAuthBtn = document.createElement('div');

    container.innerHTML = `
    <div class="image">
        <img src="love-chat-icon.png" alt="">
    </div>

    <div class="btn">

        Email: <input id="email"></input>
        Password: <input type= "password" id="password"></input>

    </div>

    <button id="google-auth">Sign in with google</button>   

    <button id="facebook-auth">Sign in with facebook</button>

    <div class="btn">
        <button class="sign-in-btn" id="sign-in-btn" >SIGN IN</button>
        <button class="sign-up-btn" id="sign-up-btn" >SIGN UP</button>
    </div>
    `;
    return container;
}

function initializeSignInScreenEventListeners(){
    $('#google-auth').on('click', function () {
        createPersistantSession(googleAuth);
    });

    $('#facebook-auth').on('click', function () {
        createPersistantSession(facebookAuth);
    });

    $('#sign-in-btn').on('click', function (){
        createPersistantSession(emailPasswordAuth);
    });
    $('#sign-up-btn').on('click', function (){
        navigate('sign-up-screen');
    });
}