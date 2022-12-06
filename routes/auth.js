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
        res.send({ user: user._id });
    }catch(err){
        res.status(400).send(err);
    }
});

// Login
router.post('/login', async (req, res) => {
     // checking if email already exists
     const user = await User.findOne({email: req.body.email});
     if(!user) return res.status(400).send('Email does not exist');
    // check if password is correct
    const match = await bcrypt.compare(req.body.password, user.password);
    if(!match) return res.status(400).send('Invalid Password')

    res.send('Successfully Logged In')
})


module.exports = router;