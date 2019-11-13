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

app.get("/shades/brand/:brand", function(req, res) {
    Shade.find({ brand: req.params.brand }).then(shades => {
    res.json(shades);
    });
});

app.get("/shades/product/:product", function(req, res) {
    Shade.find({ product: req.params.product }).then(shades => {
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

app.listen(3000, () =>
    console.log("Listening for those makeup shades!")
)