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

function removeChar(string, index) {
    return string.slice(0, index) + string.slice(index + 1);
}

function everyPosition(string, nb) {
    if (nb === 0) {
        return ;
    }

    let substr;

    for (let i = 0; i < 10; i++) {
        substr = removeChar(string, i);
        console.log(substr);
        if (nb > 0) everyPosition(substr, nb -1)
    }
}

function ContestResponse(){
    let [n, ...mots] = input;
    
    // mots.forEach((mot1, i1) => {
    //     mots.filter((m, i) => i != i1).forEach((mot2, i2) => {
    //         console.log(mots.filter((m, i) => i != i1 && i != i2))
    //         mots.filter((m, i) => i != i1 && i != i2).forEach((mot3, i3) => {
    //             // console.log(mot1, mot2, mot3);
    //         })
    //     })
    // })

    // mots.forEach((mot, index) => {
    //     for(let i = 0; i < mots.length - 1; i++) {

    //     }
    // })

    everyPosition("salut", 4);
}