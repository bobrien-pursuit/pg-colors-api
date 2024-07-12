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
    try {
      const oneColor = await db.one("SELECT * FROM colors WHERE id=$1;", id);
      return oneColor;
    } catch (error) {
      return error;
    } //end try/catch
}; // end getColor

module.exports = { getAllColors, getColor };