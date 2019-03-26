const readline = require('readline');

const readline_object = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = ['123'];

readline_object.on("line", (value) => {
	input.push(value);
})
readline_object.on("close", ContestResponse); 

function retournerPile(argPile, pos) {
    // bonjour à tous
    let tmp;
    let [...pile] = argPile;

    for (let i = 0; i < pos / 2; i++) {
        tmp = pile[i];
        pile[i] = pile[pos - i - 1];
        pile[pos - i - 1] = tmp;
    }

    return pile
}

function pileTriee(pile) {
    for (let i = 0; i < pile.length - 1; i++ ) {
        if (pile[i] > pile[i+1]) {
            return false;
        }
    }
    return true;
}

function trier(pile, nbIter) {
    let pileTri;
    let result;
    for (let i = 2; i <= pile.length; i++) {
        pileTri = retournerPile(pile, i);
        // console.log(nbIter, pileTri);
        if (pileTriee(pileTri)) {
            // console.log('triee')
            return true;
        }

        if (nbIter > 0) {    
            result = trier(pileTri, nbIter - 1);
            if (result) {
                return result;
            }
        }

    }

    return false;
}

function ContestResponse(){ 
    let pile = input.map(n => parseInt(n));
    let i;

    if (pileTriee(pile)) {
        console.log('0');
    } else {
        for (i = 0; i < 6; i++) {
            if (trier(pile, i)) {
                console.log(i+1);
                break;
            };
        }
        if (i === 6) {
            console.log('7')
        }
    }
}