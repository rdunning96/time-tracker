//room model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roomSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Room", roomSchema);
