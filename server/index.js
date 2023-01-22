const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./database/db.js");
const defaultData = require("./defaultData.js");

const PORT = process.env.PORT || 3001;
connection();

app.listen(PORT, () => console.log("server is up at port:", PORT));

defaultData();
