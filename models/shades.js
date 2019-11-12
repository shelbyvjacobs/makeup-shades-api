//model schema

const mongoose = require("../db/connections");

const Schema = mongoose.Schema;
const shadeSchema = new Schema({
    "brand": {
        type: String,
        required: true,
        minlength: 1,
        trimmed: true
    },
    "product": {
        type: String,
        trimmed: true,
        minlength: 1
    },
    "hex": {
        type: String,
        required: true,
        minlength: 1,
        trimmed: true
    },
    "H": {
        type: Number
    },
    "S": {
        type: Number
    },
    "V": {
        type: Number
    },
    "L": {
        type: Number
    },
    "group": {
        type: Number
    }
});

const shade = mongoose.model("shade", shadeSchema);
module.exports = shade; 