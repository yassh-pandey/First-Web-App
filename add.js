var config = {
	    apiKey: "AIzaSyDgJGiF15a5lZjSPUZTOTIyFgKK7tK801g",
	    authDomain: "itt-project-3f06f.firebaseapp.com",
	    databaseURL: "https://itt-project-3f06f.firebaseio.com",
	    projectId: "itt-project-3f06f",
	    storageBucket: "itt-project-3f06f.appspot.com",
	    messagingSenderId: "67372358667"
	};

firebase.initializeApp(config);

let db = firebase.firestore();

db.settings({
	timestampsInSnapshots: true
});

let title = document.querySelector("#title");
let shortDescription = document.querySelector("#shortDescription");
let post = document.querySelector("#post");
let author = document.querySelector("#author");
let email = document.querySelector("#email");
let addPost = document.querySelector("#addPost");
let added = document.querySelector("#added");
let xyzAP = document.querySelector(".xyzAP");
added.style.display = "none";

addPost.addEventListener('click', (event)=>{
	db.collection("Posts").add({
	author: author.value,
	content: post.value,
	title: title.value,
	email: email.value,
	shortDescription: shortDescription.value,
	totalLikes: 0 
}).then(()=>{
	console.log("Document successfully written!");
	xyzAP.style.display = "none";
	added.style.display = "block";

}).catch((error)=>{
	console.error("Error writing document: ", error);

});
});
