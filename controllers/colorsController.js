const express = require('express');
const colors = express.Router();
const { getAllColors, getColor } = require("../queries/colors");


// Index: localhost:4001/colors
colors.get('/', async (req, res) => {
    const allColors = await getAllColors();
    if (allColors[0]) {
        res.status(200).json(allColors);
     } else {
     res.status(500).json({ error: "server error"});
     } // end if/else
}); // end get

// Show: localhost:4001/colors/<id>
colors.get('/:id}', async (req, res) => {
    const { id } = req.params;
    const color = await getColor(id);
    if (color) {
        res.status(200).json(color);
    } else {
        res.status(500).json({ error: "server error"});
    } // end if/else
}) // end get


module.exports = colors;