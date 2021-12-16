//use this;
console.log('/*** use this ***/')

function logThis() {
    console.log("Is this === windows?", (this === window));
    console.log(this);
}

var fooObject = {
    logThis: logThis
}

console.log('this');
logThis();
console.log('object');
fooObject.logThis();