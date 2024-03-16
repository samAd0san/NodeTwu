const Product = require('../models/productModels');

const get = () => {
    return Product.find({});
}

const getById = (id) => {
    return Product.findById(id,{__v:0});
}

const post = (playload) => {
    const product = new Product(playload);
    return product.save();
}

const remove = (id) => {
    return Product.deleteOne({_id : id})
}

const put = (id,playload) => {
    return Product.updateOne({_id : id},playload);
}

const patch = (id,playload) => {
    return Product.updateOne({_id: id}, {$set: playload});
}

module.exports = {
    get,
    getById,
    post,
    remove,
    put,
    patch
}