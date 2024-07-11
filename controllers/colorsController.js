const express = require('express');
const colors = express.Router();


// Index: localhost:4001/colors
colors.get('/', (req, res) => {

    res.json({ status: "ok"})

})



module.exports = colors;