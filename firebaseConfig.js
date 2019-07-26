var config = {
	    apiKey: "AIzaSyDgJGiF15a5lZjSPUZTOTIyFgKK7tK801g",
	    authDomain: "itt-project-3f06f.firebaseapp.com",
	    databaseURL: "https://itt-project-3f06f.firebaseio.com",
	    projectId: "itt-project-3f06f",
	    storageBucket: "itt-project-3f06f.appspot.com",
	    messagingSenderId: "67372358667"
	  };
firebase.initializeApp(config);
let logout = document.querySelector("#logout");

let userEmail = "";
unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("User triggered onAuthStateChanged() : "+ user.email);
  } else {
    console.log("There is no current user.");
  }
});

logout.addEventListener('click', (event)=> {
	firebase.auth().signOut().then(function() {
	// Sign-out successful.
	console.log( "Sign-out successful. Current user : " + firebase.auth().currentUser);
	}).catch(function(error) {
	  // An error happened.
	  console.log("Error in signing-out : " + error);
	});
	});
let db = firebase.firestore();

db.settings({
	timestampsInSnapshots: true
});
db.collection("Posts").get().then((querySnapshot)=>{
	querySnapshot.forEach(function(doc) {
		let c = document.querySelector("#c");
		console.log(doc.id, " => ", doc.data());
		let t = document.createElement("h2");
		t.innerText = doc.data().title.toString();
		c.appendChild(t);
		let content1 = document.createElement("p");
		content1.innerText = doc.data().content.toString();
		c.appendChild(content1);
		let author1 = document.createElement("i");
		author1.innerText = doc.data().author.toString();
		c.appendChild(author1); 
		let hr = document.createElement("hr");
		c.appendChild(hr);
	});
}).catch(function(error) {
        console.log("Error getting documents: ", error);
    });