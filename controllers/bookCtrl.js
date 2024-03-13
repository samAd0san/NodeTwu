const authors = (req,res) => {
    const items = ['James Clear','David Guetta'];
    res.json(items);
}

const bookDb = [
    {id:1, name:'Atomic Habis', price: 500},
    {id:2, name:'RichDad PoorDad', price: 200},
    {id:3, name:'The power of the subconsious mind', price: 399}
];

// 1. GET 
const books = (req,res) => {
    res.json(bookDb);
}

// 1. GetById (GET)
const getById = (req,res) => {
    const id = parseInt(req.params.id);

/*    const filterId = (httpRequest) => {
        return httpRequest.id === id
    }
    const filteredBooks = bookDb.filter(filterId);
*/

// Filtering the elements, returning element whose httpRequest-id matches with the bookDb-id.
// httpRequest is a parameter which travese through the bookDb array.
    const filteredBooks = bookDb.filter((httpRequest) => httpRequest.id == id);
    console.log('Filtered Books:', filteredBooks);

    if(filteredBooks[0]){ // As we know there will be only one element in the filteredBooks array so, we just need to
        // return true only if there is an element in the first index of the array.
        res.status(200).send(filteredBooks[0]);
    }else{
        res.status(404).send('Not found');
    }
}

// 2. CREATE (POST)
const post = (req,res) => {
    const body = req.body;

    if(!body.id || !body.name || !body.price){
        res.status(400).send('Bad Request');
    }else{
        res.status(201).send('Created');
        bookDb.push(body);
        console.log('Book Added:',body);
    }
}

// 3. DELETE (remove)
const remove = (req,res) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)){ // If the id entered is incorrect i.e not int
        res.status(404).send('Not Found');
        return;
    }
    let found = false;

    for(let i = 0; i < bookDb.length; i++){
        // console.log('Comparing IDs:', id, bookDb[i].id);
        if(bookDb[i].id === id) {
            console.log('Element removed:',bookDb[i]);
            bookDb.splice(i,1);
            found = true;
            break;
        }
    }

    if(found){
        res.status(204).send();
    }else{ // If the id is not found in the endpoint
        res.status(404).send('Not Found');
    }
}

// 4. UPDATE (PUT)
const put = (req,res) => {
    const id = parseInt(req.params.id);
    const playload = req.body;

    if(!playload.id || !playload.name || !playload.price){
        res.status(400).send('Bad Request');
        return;
    }else{
        for(let i = 0; i < bookDb.length; i++){
            if(bookDb[i].id === id){
                bookDb[i].name = playload.name;
            }
        }
        res.status(204).send();
    }
}

// 4. PATCH (PUT)
const patch = (req,res) => {
    const id = parseInt(req.params.id);
    const playload = req.body;

    for(let i=0; i < bookDb.length; i++){
        if(bookDb[i].id === id){
            for(let key in playload){
                bookDb[i][key] = playload[key];
            }
        }
    }
    res.status(204).send();
}

module.exports = {
    books,
    authors,
    getById,
    post,
    remove,
    put,
    patch,
}