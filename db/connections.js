const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/makeup-shades", { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose;