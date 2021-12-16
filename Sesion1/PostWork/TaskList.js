function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--) {
        list = {
            'value': array[i],
            'rest': list
        };
    }
    return list;
}

function listToArray(list) {
    var array = [];
    for (var i = list; i; i = i.rest) {
        array.push(i.value);
    }
    return array;
}

function prepend(value, list) {
    return { value, rest: list };
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n === 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(arrayToList([1, 2, 3]));
// {"value": 1,"rest": {"value": 2,"rest": {"value": 3,"rest": null}}}

console.log(listToArray({ "value": 1, "rest": { "value": 2, "rest": { "value": 3, "rest": null } } }));
// [1, 2, 3]

console.log(prepend(1, prepend(2, null)));
// {value: 1, rest: {value: 2, rest: null}}

console.log(nth(arrayToList([1, 2, 3]), 1));
// 2