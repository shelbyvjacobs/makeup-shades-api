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

// show Brand
app.get("/shades/:brand", function(req, res) {
    Shade.find({ brand: req.params.brand }).then(shades => {
      res.json(shades);
    });
});

// show Product
app.get("/shades/:product", function(req, res) {
    Shade.find({ product: req.params.product }).then(shades => {
      res.json(shades);
    });
});

// show Hex
app.get("/shades/:hex", function(req, res) {
    Shade.find({ hex: req.params.hex }).then(shades => {
      res.json(shades);
    });
});

// show Group
app.get("/shades/:group", function(req, res) {
    Shade.find({ group: req.params.group }).then(shades => {
      res.json(shades);
    });
});

// edit one
app.get("/shades/:id/edit", function(req, res) {
    Shade.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true}
    ).then(shades => {
        res.json(shades);
    })
})

//delete one
app.delete("/shades/:id", function(req, res) {
    Shade.findOneAndDelete({hex: req.params.hex}).then(shades => {
        res.json(shades);
    })
})

app.listen(3000, () =>
    console.log("Listening for those makeup shades!")
)