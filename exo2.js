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
    let [nbCartons, ...poids] = input;
    poids = poids.map(n => parseInt(n));
    let peseur = 0;
    let compteur = 1;

    poids.forEach(p => {
        // console.log('a', peseur);
        // console.error(',', peseur + p);
        if (peseur + p > 100) {
            compteur++;
            // console.error('icremente', compteur);
            peseur = 0;
        }
        peseur += p;
    })

    console.log(compteur)
}