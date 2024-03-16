const Product = require('../models/productModels');

const getCount = (search) => {
    const filter = getFilterExp(search)
    return Product.countDocuments(filter);
};

const getFilterExp = (search) => {
    return {
        $or: [
            {brand : new RegExp(search,'i')},
            {model : new RegExp(search,'i')}
        ]
    };
};

const get = (currentPage,size,search,sort,direction) => {
    const rowsToSkip = (currentPage - 1) * size;
    const filter = getFilterExp(search);

    let sortDir = 1;
    if(direction.toLowerCase() === 'desc') {
        sortDir = -1;
    }

    return Product
    .find(filter,{__v : 0})
    .sort({[sort]: sortDir})
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