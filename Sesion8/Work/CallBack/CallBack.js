function HolaMundo() {

};

function Suma(a, b) {
    var c = a + b;
    return c;
}

function Resta(a, b, callback) {
    callback("Hola soy un callback");
    var c = a - b;
    return c;
}

//HolaMundo();
//Suma(1, 2);
//Resta(8, 2, function(g) {
//    console.log(g)
//})

//Sin CallBack
function primero() { console.log("Soy el 1"); }

function segundo() { console.log("Soy el 2"); }

function tercero() { console.log("Soy el 3"); }

primero();
segundo();
tercero();

//Con CallBack
function primerocb() {
    setTimeout(function() {
        console.log("Soy el 1 cb");
    }, 5000);
}

function segundocb() {
    setTimeout(function() {
        console.log("Soy el 2 cb");
    }, 6000);
}

function tercerocb() {
    setTimeout(function() {
        console.log("Soy el 3 cb");
    }, 7000);
}

primerocb();
segundocb();
tercerocb();

setTimeout(function() {
    console.log("Soy el 1");
    setTimeout(function() {
        console.log("Soy el 2");
        setTimeout(function() {
            console.log("Soy el 3");
            setTimeout(function() {
                console.log("Soy el 4");
                // Podría a ver más llamadas asíncronas
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);