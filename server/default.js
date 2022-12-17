const products = require("./constants/data.js");
const Product = require("./model/product-schema.js");

const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log("Data imported succesfully");
    } catch(err) {
        if (err.code == 11000) return console.log("Default data present in database")
        console.log("Error while inserting default data", err.message)
    }
}

module.exports = DefaultData;