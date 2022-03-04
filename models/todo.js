const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo:{
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,

    },
    date:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Todo", todoSchema);