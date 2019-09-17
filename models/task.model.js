const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    isChecked: Boolean,
    content: String,
    userId: Number
    });

module.exports = mongoose.model('Task', TaskSchema);