const { HttpError } = require("../hlepers")

// декоратор
const validateBody = shema => {
    const func = (req, res, next) => {
        const { error } = shema.validate(req.body)
        if (error) {
            next(HttpError(400, error.message))
        }
        next()
    }
    return func
}

module.exports = validateBody