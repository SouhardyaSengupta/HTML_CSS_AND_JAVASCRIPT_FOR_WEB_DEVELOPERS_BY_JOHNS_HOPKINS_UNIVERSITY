/*
MODULE 4 ASSIGNMENT SOLUTION 
Expected console output:

Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function() {
	//Storing Names of persons in names array
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    //Iterating through names array
    for (var i = 0; i < names.length; i++) {
    	//Checking the First Letter of each name is either 'j' or any other letter
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
        	//If FirstLetter is 'J' or 'j' then print "Good Bye That Name"
            byeSpeaker.speak(names[i]);
        } else {
        	//Otherwise print "Hello That Name"
            helloSpeaker.speak(names[i]);
        }
    }
})();
