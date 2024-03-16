// Product returns a Promise
const Product = require('../models/productModels');

const get = async(req,res) => {
    try{
        const data = await Product.find({});
        res.status(200);
        res.json(data);
    }catch(err){
        res.status(500);
        res.send('Internal Server Error');
    }
};

const getById = async(req,res) => {
    const id = req.params.id;
    const data = await Product.findById(id,{__v:0});

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
        const product = new Product(playload);
        await product.save();
        console.log('Document Inserted:',product);
        res.status(201).send('Created');
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
};

const remove = async(req,res) => {
    try{
        const id = req.params.id;
        await Product.deleteOne({_id : id});
        res.status(204).send();
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
}

const put = async(req,res) => {
    try{
        const id = req.params.id;
        await Product.updateOne({_id : id},req.body);
        res.status(204).send();
    }catch(err){
        res.status(500).send('Internal Server Error');
    }
}

const patch = async(req,res) => {
    try{
        const id = req.params.id;
        await Product.updateOne({_id: id}, {$set: req.body});
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