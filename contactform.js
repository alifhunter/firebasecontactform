// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCmu0TpUyQakxXYWe1UlQH4j_S-OGLOKuo",
    authDomain: "fir-cf-3a274.firebaseapp.com",
    databaseURL: "https://fir-cf-3a274.firebaseio.com",
    projectId: "fir-cf-3a274",
    storageBucket: "fir-cf-3a274.appspot.com",
    messagingSenderId: "944750566322",
    appId: "1:944750566322:web:c17e65e186d2005e"
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


