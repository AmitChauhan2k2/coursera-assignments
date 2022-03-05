//1

// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Ankit
Good Bye Aman
Good Bye Aryan
Good Bye Ajit
Hello Manu
Hello Harsh
Hello Ritish
Hello Sahil
Hello Krishna
Good Bye Sid*/

/*Hello speaker function*/
const helloSpeaker = {
	speakWord: 'Hello',	
};
//This says Hello
(function () {
	helloSpeaker.speak = function (userName) {
		return (helloSpeaker.speakWord + " " + userName);
	}
}());


//2
/*Goodbye speaker function*/
const byeSpeaker = {
	speakWord: 'Good Bye'
};

(function () {
	byeSpeaker.speak = function (userName) {
		return (byeSpeaker.speakWord + " " + userName);
	}
}());

//3
//This choose the names
(function () {
	var names = ['Ankit', 'Aman', 'Aryan', 'Ajit', 'Manu', 'Harsh', 'Ritish', 'Sahil', 'Krishna', 'Sid'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			console.log(byeSpeaker.speak(name));
			document.write(byeSpeaker.speak(name) + '<br>');
		} else {
			console.log(helloSpeaker.speak(name));
			document.write(helloSpeaker.speak(name + '<br>'));
		}
	}
})();
