const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const taskSchema = new Schema({
    // userId: { type: ObjectId, ref: "User" },
    task: { type: String, default: null,index: 'text' },
},
    { timestamps: true }
);

module.exports = mongoose.model("task", taskSchema);