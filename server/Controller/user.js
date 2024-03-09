const user = require('../Models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
const secret = "1234";



exports.userRegistration = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isExist = await user.findOne({ email: email })
    if (isExist) {
        res.status(403).send({ message: 'User already exist' })
    } else {
        bcrypt.hash(password, saltRounds, async function (err, hash) {
            const data = {
                name: name,
                email: email,
                password: hash
            }
            const createData = await user.create(data)
            if (createData) {
                res.status(200).send({  message: 'Registeration successful', data: createData })
            }
        });
    }

    } catch (error) {
        console.error("Error in userRegistration:", error);
        return res.status(500).json({
            isSuccess: false,
            message: "Internal Server Error",
        });
    }
}

exports.userLogin = async (req, res, next) => {
    const { email, password } = req.body
    const isExist = await user.findOne({ email: email })
    if (isExist) {
        bcrypt.compare(password, isExist.password, function (err, result) {
            if (result) {
                const token = jwt.sign({
                    data: isExist._id
                }, secret, { expiresIn: '30d' });
                res.status(200).send({  message: 'Logged in Successfully',token:token })
            } else {

                res.status(401).send({  message: 'Password not matched' })
            }
        });

    } else {
        res.status(404).json({ message: 'User not found' })
    }
}