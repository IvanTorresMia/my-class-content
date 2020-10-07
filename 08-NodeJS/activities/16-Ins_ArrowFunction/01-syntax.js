// All of the `createGreeting` functions are equivalent
var createGreeting = function(message, name) {
    return message + ", " + name + "!";
};

// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
    return message + ", " + name + "!";
};

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!";

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting);

// Same as 
var greet = function(greeting) {
    console.log(greeting);
}
greet("Ivan")
    // We call arrow functions the same way as we call regular functions
    // This is calling a function and storing it inside of a variable
var greeting = createGreeting("Hello", "Angie");

// This is calling a function and giving it the parameter of the variable storing the other function. 
// Logs "Hello, Angie!";
greet(greeting);