/*
function compact(array) {
    if (!array.length) throw Error('Array cannot be empty');
    return array.filter(function(element) {
        return !!element
    })
}
module.exports = compact
*/
export const compact = (array) => {
    if (array === undefined || !array.length) throw Error('Array cannot be empty');
    return array.filter((element) => !!element);
}