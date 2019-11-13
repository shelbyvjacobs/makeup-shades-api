const express = require("express");
const app = express();
const parser = require("body-parser");
const Shade = require("./models/shades");

app.use(parser.json());

// index
app.get("/shades", function (req, res) {
    Shade.find({}).then(shades => {
        res.json(shades);
    })
})

// create
app.post("/shades", function (req, res){
    Shade.create(req.body).then(shades => {
        res.json(shades)
    })
})

//Search by Brand, Product, Hex, or Group
    // show Brand
    app.get("/shades/brand/:brand", function(req, res) {
        Shade.find({ brand: req.params.brand }).then(shades => {
        res.json(shades);
        });
    });

    // show Product
    app.get("/shades/product/:product", function(req, res) {
        Shade.find({ product: req.params.product }).then(shades => {
        res.json(shades);
        });
    });

    // show Hex
    app.get("/shades/hex/:hex", function(req, res) {
        Shade.find({ hex: req.params.hex }).then(shades => {
        res.json(shades);
        });
    });

    // show Group
    app.get("/shades/group/:group", function(req, res) {
        Shade.find({ group: req.params.group }).then(shades => {
        res.json(shades);
        });
    });

// edit one (test this!) Find one by id and change the value of hex
app.get("/shades/:id/edit", function(req, res) {
    Shade.findOneAndUpdate(
        {_id: req.params.id}, //what it's finding
        { $set: {hex: req.body.hex}}, //what it's updating to
        {new: true}
    ).then(shades => {
        res.json(shades);
    })
})

//delete one
app.delete("/shades/:id", function(req, res) {
    Shade.findOneAndDelete({_id: req.body.id}).then(shades => {
        res.json(shades);
    })
})

app.listen(3000, () =>
    console.log("Listening for those makeup shades!")
)