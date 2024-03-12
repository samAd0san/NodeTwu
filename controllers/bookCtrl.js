const books = (req,res) => {
    const items = [
        {id:1, name:'Atomic Habis'},
        {id:2, name:'RichDad PoorDad'},
    ];

    res.json(items);
}

const authors = (req,res) => {
    const items = ['James Clear','David Guetta'];
    res.json(items);
}

module.exports = {
    books,
    authors,
}