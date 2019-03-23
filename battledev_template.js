const readline = require('readline');

const readline_object = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

var input = [];

readline_object.on("line", (value) => {
	input.push(value);
})
readline_object.on("close", ContestResponse); 


function ContestResponse(){
	console.log(input);
}