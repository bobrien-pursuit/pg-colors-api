const db = require("../db/dbConfig.js");

const getAllColors = async () => {
    try {
        const allColors = await db.any("SELECT * FROM colors;");
        return allColors;
      } catch (error) {
        return error;
    } // end try/catch
}; // end getAllColors

const getColor = async (id) => {
    try {
      const oneColor = await db.one("SELECT * FROM colors WHERE id = $1;", id);
      return oneColor;
    } catch (error) {
      return error;
    } //end try/catch block
}; // end getColor(id)

const createColor = async (color) => {
    try {
      const newColor = await db.one(
        "INSERT INTO colors (name, is_favorite) VALUES($1, $2) RETURNING *;",
        [color.name, color.is_favorite]
      ); // end newColor declaration
      return newColor;
    } catch (error) {
      throw error;
    } // end try/catch block
} //end createColor(color)

const deleteColor = async (id) => {
  try {
    const deletedColor = await db.one("DELETE FROM colors where ID=$1 RETURNING *", id);
    return deletedColor;
  } catch (error) {
    return error;
  }
}

const updateColor = async (id, color) => {
  try {
    const updatedColor = await db.one(
      "UPDATE colors SET name=$1, is_favorite=$2 where id=$3 RETURNING *", [color.name, color.is_favorite, id]
    );
    return updatedColor;
  } catch (error) {
    return error; 
  };
};

module.exports = { getAllColors, getColor, createColor, deleteColor, updateColor };