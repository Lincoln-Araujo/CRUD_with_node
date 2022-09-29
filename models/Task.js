const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    check: {
        type: Boolean,
        require: true
    },
});

module.exports = mongoose.model("Task", taskSchema);