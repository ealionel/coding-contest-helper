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
    let [ranking, ...depasse] = input

    ranking = parseInt(ranking);
    // console.log('r', ranking);
    depasse = depasse.map(p => p.split(' ').map(n => parseInt(n)));

    // console.log(depasse);

    depasse.forEach((p) => {
        ranking += p[0]
        ranking -= p[1];
        // console.log(ranking);
    })

    if (ranking > 10000) {
        console.log('KO');
    } else if (ranking < 100){
        console.log('1000')
    } else if (ranking <= 10000) {
        console.log('100')
    }

    // console.log('ranking', ranking);

    

}