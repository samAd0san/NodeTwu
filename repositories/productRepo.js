const Product = require('../models/productModels');

const getCount = () => {
    return Product.countDocuments();
};

const get = (currentPage,size) => {
    const rowsToSkip = (currentPage - 1) * size;

    return Product
    .find({},{__v : 0})
    .skip(rowsToSkip)
    .limit(size)
};

const getById = (id) => {
    return Product.findById(id,{__v:0});
};

const post = (playload) => {
    const product = new Product(playload);
    return product.save();
};

const remove = (id) => {
    return Product.deleteOne({_id : id})
};

const put = (id,playload) => {
    return Product.updateOne({_id : id},playload);
};

const patch = (id,playload) => {
    return Product.updateOne({_id: id}, {$set: playload});
};

module.exports = {
    get,
    getCount,
    getById,
    post,
    remove,
    put,
    patch
}