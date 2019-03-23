let a = "salut à tous"

a = a.split(' ');

console.log(a);

let b = [1, 4, 2, 56, 34, 3, 623, 7]

let c = b.map(n => {
    return {a: n}
});

console.log(c);

c.sort((a, b) => a.a > b.a);

console.log(b);