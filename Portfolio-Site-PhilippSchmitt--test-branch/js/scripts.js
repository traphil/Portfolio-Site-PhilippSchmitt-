console.log("Hey! Welcome to My Portfolio Site");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

var Text1 = "He said: \"Yes!\", that's for sure";
var Text2 = 'He said: "Yes!", that\'s for sure';

var Integer = 456;
var Integer2 = -345; // This is negative integer
var Float = 50.25;

var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; //This is just the string "false", not false!

var emptyVariable = null;
var notNullButAString = "null";
console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!


    var age = 39;
    var name = "John";
    var personParent = {
      name: name,
      age: age,
      child: {
        name: "Sara"
      }
    };

personParent.name = "Anne"; // Set the name property to "Anne"
personParent.child.size = 175; // Set new values that weren't set before
console.log(personParent.child.name); // Output "Sara" to the console

console.log(personParent["name"]); // The same as personParent.name
var weWantThisField = "age";
  console.log(personParent[weWantThisField]); // The same as personParent.age

delete shortObject.name; // Will remove the "name" property


//this

console.log(this)
