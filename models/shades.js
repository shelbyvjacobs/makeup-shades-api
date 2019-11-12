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
        minlength: 1,
        trimmed: true
    },
    "group": {
        type: Number
    }
});

const shade = mongoose.model("shade", shadeSchema);
module.exports = shade; 