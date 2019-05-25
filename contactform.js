// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "<insert yours>",
    authDomain: "<insert yours>",
    databaseURL: "<insert yours>",
    projectId: "<insert yours>",
    storageBucket: "<insert yours>",
    messagingSenderId: "<insert yours>",
    appId: "<insert yours>"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference message collection firebase
var messagesRef = firebase.database().ref('messages'); //specific collection called messages

//event listener to submit button
document.getElementById('contactForm').addEventListener('submit', submitFunction);

var timestamp = firebase.database.ServerValue.TIMESTAMP;

function getID(id){
    return document.getElementById(id).value;
}

function submitFunction(event){
    event.preventDefault();

    //get values
    var name = getID('name');
    var email = getID('email');
    var message = getID('message');

    //save message to firebase
    saveMessages(name, email, message, timestamp);

    // clear form
    document.getElementById('contactForm').reset();

    console.log(name);
}

//save message to firebase
function saveMessages(name, email, message, timestamp){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({ //sending object of data to message collection di firebase
        name: name,
        email: email,
        message: message,
        timestamp: timestamp
    });
}


