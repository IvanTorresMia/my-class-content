//These variable give us access to what the user types in. 
var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");

//This gives us access to the sign up button
var signUpButton = document.querySelector("#sign-up");

//this gives us access to the messsage displayed on the form.
var msgDiv = document.querySelector("#msg");

// this gives us acces to where we are going pass our user information to.
var userFirstNameSpan = document.querySelector("#user-first-name");
var userLastNameSpan = document.querySelector("#user-last-name");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

// This is going to display out messge that gives us affirmation
function displayMessage(type, message) {
    // this hooks to the message argument
  msgDiv.textContent = message;
//   this hooks to the type argument.
  msgDiv.setAttribute("class", type);
}

// function for sign up button! 
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  // This creates the user object when you submit your info
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };
  console.log(user);

  // validate the fields
  if (user.firstName === "") {
    displayMessage("error", "First name cannot be blank");
  } else if (user.lastName === "") {
    displayMessage("error", "Last name cannot be blank");
  } else if (user.email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (user.password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // set new submission to the console, turning it to a string
    localStorage.setItem("user", JSON.stringify(user));

    // Gets the submission and passes it to the page using the user objects. 
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userFirstNameSpan.textContent = lastUser.firstName;
    userLastNameSpan.textContent = lastUser.lastName;
    userEmailSpan.textContent = lastUser.email;
    userPasswordSpan.textContent = lastUser.password;
  }
});
