const db = require("../db/dbConfig.js");

const getAllColors = async () => {
    try {
        const allColors = await db.any("SELECT * FROM colors;");
        return allColors;
      } catch (error) {
        return error;
    }
};

const getColor = async () => {

}; // end getColor

module.exports = { getAllColors, getColor };