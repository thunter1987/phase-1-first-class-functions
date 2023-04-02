function receivesAFunction(callbackFunction){
    callbackFunction();
}
function returnsANamedFunction (namedFunction){
    return namedFunction
    function namedFunction() {
        console.log(`I am a named function`)
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(`I am an anonymous function`);
    };

}