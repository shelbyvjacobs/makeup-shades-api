const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/makeup-shades-api", { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose;