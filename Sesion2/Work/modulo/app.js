import { sum, prod } from './helpers.js'

document.open();

document.write(`<span>3 + 2 = ${await sum(3, 2)}</span></br>`);
document.write(`<span>3 * 2 = ${await prod(3, 2)}</span>`);

document.close();

console.log(`3 + 2 = ${sum(3, 2)}`);
console.log(`3 * 2 = ${prod(3, 2)}`);