const checkName = (req, res, next) => {
    if (req.body.name) {
        next();
    } else {
        res.status(400).json({ error: "Name is required."});
    } // end if/else
}; //ends checkName()

const checkBoolean = (req, res, next) => {
    if (req.body.is_favorite) {
        next();
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean value"})
    }
} // checkBoolean

module.exports = { checkName, checkBoolean };