const express = require('express');
const colors = express.Router();
const { getAllColors } = require("../queries/colors.js");


// Index: localhost:4001/colors
colors.get('/', async (req, res) => {});



module.exports = colors;