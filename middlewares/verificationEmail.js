const Joi = require("joi")

const verificationEmail = (req, res, next) => {

    const schema = Joi.object({
        email: Joi.string().email().min(4).max(30).required(),
    });

    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
        return res.status(400).json({
            message: 'missing required field email'
        })
    }
    next();
}

module.exports = { verificationEmail }