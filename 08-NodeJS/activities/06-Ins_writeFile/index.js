var fs = require("fs");
// ☝️ What is different about this example?

// 🙋 Rather than readFile, we are using the fs method writeFile.
// Rather than specifying an encoding format, our second argument is process.argv[2].

var obj = {
    prop1: "hi",
    prop2: "hi",
};

var animals = ["dog", "cat", "chicken"];
fs.writeFile("log.txt", obj, "utf8", function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("Success!");
});

// ☝️ What happens when we run our application multiple times?

// 🙋 writeFile overwrites existing files.

// ☝️ How do we think we can resolve this issue?

// 🙋 We need a method that can append text to files.