const checkName = (req, res, next) => {
    const { name } = req.body;
    if (name) {
        next();
    } else {
        res.status(400).json({ error: "Name is required."});
    } // end if/else
}; //ends checkName()

const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
        if (is_favorite == "false" || is_favorite == "true" || typeof is_favorite == "boolean"){
                            next();
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean value"})
    } // end if/else
} // end checkBoolean()

module.exports = { checkName, checkBoolean }; // exports