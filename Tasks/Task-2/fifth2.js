let a = true;
let b = false;
let c = true;


let andResult1 = a && b;
console.log(`a && b: ${andResult1}`); 

let andResult2 = a && c;
console.log(`a && c: ${andResult2}`);

let orResult1 = a || b;
console.log(`a || b: ${orResult1}`); 

let orResult2 = b || b;
console.log(`b || b: ${orResult2}`);

let notResult1 = !a;
console.log(`!a: ${notResult1}`);

let notResult2 = !b;
console.log(`!b: ${notResult2}`); 

let combinedResult1 = (a && b) || (b && c);
console.log(`(a && b) || (b && c): ${combinedResult1}`); 

let combinedResult2 = (a || b) && (b || c);
console.log(`(a || b) && (b || c): ${combinedResult2}`); 

let combinedResult3 = !(a && b) || (b && !c);
console.log(`!(a && b) || (b && !c): ${combinedResult3}`);
