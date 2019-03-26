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
    let [taille, ...map] = input;

    taille = parseInt(taille);

    map = map.map(l => l.split(''));

    let position = [0,0];
    let gold = 0;
    let parcours = '';
    let toRight = true;

    // Premier passage depuis en bas
    for(let y = 0; y < taille; y++) {
        for(let x = toRight? 0:taille-1; toRight? x < taille: x >= 0; toRight? x++:x--) {
            if (toRight? x > 0:x < taille-1) {
                parcours+= toRight? '>':'<'
            }
            if (map[y][x] === 'o') {
                gold++;
                map[y][x] = '.';
                parcours+= 'x';
            }
        }
        toRight = !toRight;
        if (y !== taille - 1) parcours += 'v';
    }

    for(let y = taille - 1; y >= 0; y--) {
        for(let x = toRight? 0:taille-1; toRight? x < taille: x >= 0; toRight? x++:x--) {
            // console.log(map[y][x]);
            if (toRight? x > 0:x < taille-1) {
                parcours+= toRight? '>':'<'
            }
            if (map[y][x] === '*') {
                gold = gold*2;
                map[y][x] = '.';
                parcours+= 'x';
            }
        }
        toRight = !toRight;
        if (y != 0) parcours += '^';
    }

    console.log('\n');
    console.log(parcours);
    console.log(gold);

    // console.log(map);
}