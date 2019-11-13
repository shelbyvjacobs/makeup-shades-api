const mongoose = require("../db/connections");

const Schema = mongoose.Schema;
const shadeSchema = new Schema({
    "brand": {
        type: String,
        required: true,
        minlength: 1,
        trimmed: true
    },
    "brandShort": {
        type: String,
        minlength: 1,
        trimmed: true
    },
    "product": {
        type: String,
        trimmed: true,
        minlength: 1
    },
    "productShort": {
        type: String,
        minlength: 1,
        trimmed: true
    },
    "hex": {
        type: String,
        minlength: 1,
        trimmed: true
    },
    "hue": Number,
    "saturation": Number,
    "value": Number,
    "lightness": Number,
    "group": Number
});

const shade = mongoose.model("shade", shadeSchema);
module.exports = shade;