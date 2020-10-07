// var check = function(){
// if (process.argv[3] === "5") {
//     return true
// } else {
//     return false
// }

// }
// console.log(check)



console.log(process.argv)

console.log(process.argv[2])

console.log(process.argv[3])

var input1 = process.argv[2]
var input2 = process.argv[3]

if (input1 === input2) {
    console.log("true")
} else {
    console.log(false)
}

console.log(input1 === input2 ? true : false);