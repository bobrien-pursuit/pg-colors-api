const checkName = (req, res, next) => {
    if (req.body.name) {
        next();
    } else {
        res.status(400).json({ error: "Name is required."});
    } // end if/else
}; //ends checkName()

const checkBoolean = (req, res, next) => {
        if (req.body.is_favorite == "false" || req.body.is_favorite == "true" || typeof req.body.is_favorite == "boolean"){
                            next();
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean value"})
    } // end if/else
} // end checkBoolean()

module.exports = { checkName, checkBoolean }; // exports