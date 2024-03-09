const { body, validationResult } = require('express-validator');


const validateSignup = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    // Run validation
    async (req, res, next) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => error.msg);
            return res.status(400).json({ message: errorMessages.join("") });
        }
        next();
    }


]

const validateLogin = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    // Run validation
    async (req, res, next) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessages = errors.array().map(error => error.msg);
            return res.status(400).json({ message: errorMessages.join("") });
        }
        next();
    }


]

module.exports = { validateSignup, validateLogin }

