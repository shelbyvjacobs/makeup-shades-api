const shadesJSON = require("../models/shades.json");
const Shade = require("../models/shades");

const shadeData = shadesJSON.map(item => {
    const shade = {}
    shade.brand = item.brand
    shade.product = item.product
    shade.hex = item.hex
    shade.H = item.H
    shade.S = item.S
    shade.V = item.V
    shade.L = item.L
    shade.group = item.group
    return shade
})

Shade.deleteMany({})
    .then(() => {
        Shade.create(shadeData)
            .then(shade => {
                console.log(shade)
                process.exit();
            })
            .catch(err => {
                console.log(err)
                process.exit();
            })
    })