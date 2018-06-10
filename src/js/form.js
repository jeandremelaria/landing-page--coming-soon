// Initialize Firebase
var config = {
  apiKey: "AIzaSyCKbCPRbHjkFJemYyTVuriKjjbwjvMtjkU",
  authDomain: "landing-page-coming-soon.firebaseapp.com",
  databaseURL: "https://landing-page-coming-soon.firebaseio.com",
  projectId: "landing-page-coming-soon",
  storageBucket: "landing-page-coming-soon.appspot.com",
  messagingSenderId: "50957407644"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm (e){
  e.preventDefault();

  // Get values
  var email = getInputVal("email");

  // Save message
  saveMessage(email);
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set(
    {
      email:email
    }
  );
}