const Product = require('../model/product-schema.js');


const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    } catch (error) {

    }
}

const getProductById = async (request, response) => {
    try {
        const products = await Product.findOne({ 'id': request.params.id });
        response.json(products);
    } catch (error) {

    }
}

module.exports = { getProducts, getProductById }