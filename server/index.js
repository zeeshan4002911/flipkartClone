const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const connection = require("./database/db.js");
const defaultData = require("./defaultData.js");

connection();

app.use('/', require('./routes/route.js'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("server is up at port:", PORT));

defaultData();
