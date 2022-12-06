const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true 
    },
    password: {
        type: String,
        trim: true,
        min: 3,
        required: true

    },

});

module.exports = mongoose.model('User', userSchema);

