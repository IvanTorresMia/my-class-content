const questions = [

];

function writeToFile(fileName, data) {}

function init() {

}

init();

const fs = require("fs");

const someStr = `# ${data.title}

## About
hello this project controls the weather

## License`
fs.writeFile("README.md", someStr, "utf8", function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("Success!");
});