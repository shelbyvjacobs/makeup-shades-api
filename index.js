const express = require("express");
const app = express();
const mongoose = require("mongoose")
const parser = require("body-parser");
const Shade = require("./models/shades");

mongoose.set('useFindAndModify', false);

app.use(parser.json());

app.post("/shades", function (req, res){
    Shade.create(req.body).then(shades => {
        res.json(shades)
    })
})

app.get("/shades", function (req, res) {
    Shade.find({}).then(shades => {
        res.json(shades);
    })
})

app.get("/shades/brand/:brandShort", function(req, res) {
    Shade.find({ brandShort: req.params.brandShort }).then(shades => {
    res.json(shades);
    });
});

app.get("/shades/product/:productShort", function(req, res) {
    Shade.find({ productShort: req.params.productShort }).then(shades => {
    res.json(shades);
    });
});

app.get("/shades/hex/:hex", function(req, res) {
    Shade.find({ hex: req.params.hex }).then(shades => {
    res.json(shades);
    });
});

app.get("/shades/group/:group", function(req, res) {
    Shade.find({ group: req.params.group }).then(shades => {
    res.json(shades);
    });
});

app.get("/shades/:id/edit", function(req, res) {
    Shade.findOneAndUpdate(
        {_id: req.params.id},
        { $set: {hex: req.body.hex}},
        {new: true}
    ).then(shades => {
        res.json(shades);
    })
})

app.delete("/shades/:id", function(req, res) {
    Shade.findOneAndDelete({_id: req.body.id}).then(shades => {
        res.json(shades);
    })
})

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});