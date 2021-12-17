module.exports = {
    sumar: function(num1, num2) {
        if (num1 === undefined || typeof num1 !== 'number') {
            throw new Error('No se ingresaron valores para num1');
        }
        if (num2 === undefined || typeof num2 !== 'number') {
            throw new Error('No se ingresaron valores para num2');
        }
        console.log(num1 + num2)
        return num1 + num2;
    },
    restar: function(num1, num2) {
        if (num1 === undefined || typeof num1 !== 'number') {
            throw new Error('No se ingresaron valores para num1');
        }
        if (num2 === undefined || typeof num2 !== 'number') {
            throw new Error('No se ingresaron valores para num2');
        }
        console.log(num1 - num2)
        return num1 - num2;
    },
    multiplicar: function(num1, num2) {
        if (num1 === undefined || typeof num1 !== 'number') {
            throw new Error('No se ingresaron valores para num1');
        }
        if (num2 === undefined || typeof num2 !== 'number') {
            throw new Error('No se ingresaron valores para num2');
        }
        console.log(num1 * num2)
        return num1 * num2;
    },
    dividir: function(num1, num2) {
        if (num1 === undefined || typeof num1 !== 'number') {
            throw new Error('No se ingresaron valores para num1');
        }
        if (num2 === undefined || typeof num2 !== 'number') {
            throw new Error('No se ingresaron valores para num2');
        }
        if (num2 <= 0) {
            throw new Error('No se puede dividir por cero');
        }
        console.log(num1 / num2)
        return num1 / num2;
    }
};