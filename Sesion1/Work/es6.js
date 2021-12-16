const colors = [1, 2, 3, 4, 5, 6, 7, 8];
const colorsCopy = [...colors];
console.log(colorsCopy);

const book = [{
        author: 'author1',
        title: 'title1'
    },
    {
        author: 'author2',
        title: 'title2'
    }
];

const bookCopy = {...book };
const bookCopy2 = [...book];

console.log(bookCopy)
console.log(bookCopy2)

/*El spread operation, permite la interacion con arreglos y objecto, el cual creara un nuevo 'objeto' por valor y no referencia.
esto permite que se altere el contenido del nuevo 'objeto' sin que este altere el 'objeto' original*/