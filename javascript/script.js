//Function called "signIn", causes an alert to pop up with text "Thanks for signing in". Should be triggered by clicking on the button with id of "sign-in".

var password = "myPassword";

function signIn() {

    var userInput = prompt("Enter your password");
    if (userInput != null) {
        if (userInput == password) {
            alert("Good guess! You're in.");
        }
        else {alert("Not even close, buddy.");
        }
    }
}

function giveHint() {
    alert("I'd try '" + password + "' if I were you.");
}



//Function called "signUp", causes a prompt to appear and ask for user's email address, then prints to the "output-here" paragraph "Thanks for signing up, " and the entered email address. Should be triggered by clicking on the button with id of "sign-up".