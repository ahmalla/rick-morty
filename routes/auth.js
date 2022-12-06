const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
router.post('/register', async (req, res) => {
    // checking if user already exists
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists) return res.status(400).send('Email already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;