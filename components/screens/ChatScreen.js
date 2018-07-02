let db = firebase.database();
let messages = db.ref('messages/');

function buildChatScreen(user) {
    $('#loading-screen, #sign-in-screen, #sign-up-screen').fadeOut("slow",function(){
        $('#root').html(ChatScreen(user));
        initializeChatScreenEventListeners(user);
    });   
}

function ChatScreen(user) {
    const container = document.createElement('div')
    container.id = 'chat-screen';
    container.classList.add('chat-screen');
    
    document.innerHTML=`
    <div class="chat-header"> Hello! ${user.displayName}
        <button id="sig-out-btn">Sign Out</button>
    </div>

    <div class="chat-screen-message-container"></div>

    <div id="message-container" class="message-container">
        <input type="text" id="message-input"> </input>

    `;
    return container;
}

function initializeChatScreenEventListeners(){

}