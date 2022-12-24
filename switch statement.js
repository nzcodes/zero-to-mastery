// scope

// Root Scope (window)
let fun = 5;

function funFunction() {
    // child scope
    let fun = "helloooo"
    console.log(fun)
}
function funerFunction() {
    // child scope
    let fun = "byeee"
    console.log(fun)
}
function funestFunction() {
    // child scope
    let fun = "ahhhh"
    console.log(fun)
}

console.log(fun);

switch (rating) {
    case 5:
        console.log('Excellent 1');
        break;
    default:
        console.log('Poor 4');
}  
