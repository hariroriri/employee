const mongoose = require("mongoose");

const PositionSchema = new mongoose.Schema({
    position_name: { 
        type: String,
        required: true 
    },
});

module.exports = mongoose.model("Position", PositionSchema);
