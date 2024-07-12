const express = require('express');
const colors = express.Router();
const { getAllColors, getColor, createColor } = require("../queries/colors.js");
const { checkName } = require("../validations/checkColors.js")


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
colors.get('/:id', async (req, res) => {
    const { id } = req.params;
    const color = await getColor(id);
    if (color) {
        res.status(200).json(color);
    } else {
        res.status(404).json({ error: "not found"});
    } // end if/else
}); // end show route

// Create: localhost:4001/colors
colors.post('/', checkName, async (req, res) => {
    const color = await createColor(req.body);
    res.json(color);
}); // end post route


module.exports = colors;