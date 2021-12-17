import { sum } from './util.js'
import './app.css'


const compact = (array) => array.filter((element) => !!element)

const originalArray = [0, 1, false, 2, '', 3]
const compactedArray = compact(originalArray)

console.log(`
Here is the original array: ${originalArray}
And here is the compacted array: ${compactedArray}
`)


console.log(`3 + 2 = ${sum(3, 2)}`);