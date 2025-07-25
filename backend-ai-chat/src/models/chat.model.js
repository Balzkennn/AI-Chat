const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    role: {
        type: String,
        ref: "User",
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("Chat", chatSchema)