const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: { type: String, required: true, unique: true},
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagLine: String
})

module.exports = mongoose.model('products', productSchema);