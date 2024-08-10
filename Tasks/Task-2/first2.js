function varExample() {
    var x = 2;
    if (true) {
        var x = 4; 
        console.log(x); 
    }
    console.log(x); 
}
varExample();
function letExample() {
    let y = 6;
    if (true) {
        let y = 10; 
        console.log(y); 
    }
    console.log(y);
}
letExample();
function constExample() {
    const z = 30;
    console.log(z); // 1
}
constExample();
function scopeExample() {
    if (true) {
        var a = 'var';
        let b = 'let';
        const c = 'const';
    }
    console.log(a);
}
scopeExample();
