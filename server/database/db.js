const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const dotenv = require("dotenv").config();
const server = process.env.DATABSE_URL || "mongodb://localhost:27017/test"

const connection = () => {
    try {
        mongoose.connect(server, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => {
            let type = (server == process.env.DATABSE_URL) ? 'remote' : 'local';
            return console.log(`Connected with ${type} database`);
        })
        .catch(() => console.log("Failed to connect to database"))
    } catch (err) {
        console.log("Unable to connect to database", err.message)
    }
}

module.exports = connection;