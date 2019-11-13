const shadesJSON = require("../models/shades.json");
const Shade = require("../models/shades");

const shadeData = shadesJSON.map(item => {
    const shade = {}
    shade.brand = item.brand
    shade.brandShort = item.brand_short
    shade.product = item.product
    shade.productShort = item.product_short
    shade.hex = item.hex
    shade.hue = item.H
    shade.saturation = item.S
    shade.value = item.V
    shade.lightness = item.L
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