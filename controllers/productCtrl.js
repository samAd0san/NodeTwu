const ProductRepo = require('../repositories/productRepo')

const get = async(req,res) => {
    try{
        // user will enter param it not entered default 1/10 (page/sizea)
        const page = req.params.page || 1;
        const size = req.params.size || 10;
        const search = req.query.search;
        const sort = req.query.sort;
        const direction = req.query.direction || 'asc';

        // /api/products/page/2/size/10?sort=discount&direction=desc
        const data = await ProductRepo.get(page,size,search,sort,direction);
        // For MetaDate of Pagination
        // It'll return only total search elements and page
        const totalElements = await ProductRepo.getCount(search);
        const totalPages = Math.ceil(totalElements / size);

        const response = {
            data,
            // metadata
            totalElements,
            totalPages,
        }
        res.status(200);
        res.json(response);
    }catch(err){
        console.error(err)
        res.status(500);
        res.send('Internal Server Error');
    }
};

const getById = async(req,res) => {
    const id = req.params.id;
    const data = await ProductRepo.getById(id);

    if(!id){
        res.status(404).send('Not Found');
    }else{
        res.status(200).json(data);
    }  
}

const post = async(req,res) => {
    const playload = req.body;
    // const {body} = req
    
    try{
        await ProductRepo.post(playload);
        console.log('Document Inserted:',playload);
        res.status(201).send('Created');
    }catch(err){
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const remove = async(req,res) => {
    try{
        const id = req.params.id;
        await ProductRepo.remove(id);
        res.status(204).send();
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
}

const put = async(req,res) => {
    try{
        const id = req.params.id;
        const playload = req.body;
        await ProductRepo.put(id,playload);
        res.status(204).send();
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
}

const patch = async(req,res) => {
    try{
        const id = req.params.id;
        const playload = req.body;
        await ProductRepo.patch(id,playload);
        res.status(204).send();
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    get, 
    post,   
    getById,
    remove,
    put,
    patch,
}