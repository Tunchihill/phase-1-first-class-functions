function receivesAFunction(num1, num2, add) {
    return add(num1, num2);
}

console.log(receivesAFunction(4, 4, function(num1, num2) {
    return num1 + num2;
}));


function returnsANamedFunction(){
    function namedFunction(){
    
    }
    return namedFunction
}

function returnsAnAnonymousFunction(){
    return function(){}
}