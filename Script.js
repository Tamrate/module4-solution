// Define an array of names
var names = ["John", "tamrat", "Eyasu", "Hagos", "Jessica"];

// Loop over each name in the array
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];

    // Check the first letter of the name
    var firstLetter = name.charAt(0).toLowerCase();

    // Print "Goodbye" if the first letter is 'j' or 'J', otherwise print "Hello"
    if (firstLetter === 'j') {
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
}