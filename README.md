# makeup-shades-api

## Description & Features
The Makeup Shades API contains information about the makeup foundations colors in the United States, Nigeria, India, and Japan. Each object contains information on the brand, the product name, the hexidecimal color code, HSL and HSV color codes, and the the country where it is most popular.

This project was to build a JSON API from the ground up. The API is comprised of a JSON file with raw data (from [here](https://github.com/the-pudding/data/tree/master/makeup-shades)), a model built with Mongoose, Mongoose queries with RESTful paths, and a Node.js seed file.

## Getting Started
### Base URL: (url here)
*Table 1*

| Query | Path | Description | Additional Information |
|:--------:|:-------:| ------------| ----|
| **POST** | `/shades` | create a new object |  |
| **GET** | `/shades` | find all objects in database |  |
| **GET** | `/shades/brand/{brandShort}` | find by brand name | String. `brandShort` is a shortened version (2-3 characters) of the `brand`. For more information, see *table 2*. |
| **GET** | `/shades/product/{productShort}` | find by product name | String. `productShort` is a shortened version (2-3 characters) of the `product`. For more information, see *table 2*. |
| **GET** | `/shades/hex/{hex}` | find by hexidecimal color code (does not include # symbol). | String. |
| **GET** | `/shades/group/{group}` | find by country | Number. <br/>&bull; `2`: United States Best Sellers. <br/>&bull; `5`: Nigerian Best Sellers. <br/>&bull; `6`: Japanese Best Sellers. <br/>&bull; `7`: Indian Best Sellers. |
| **GET** | `/shades/{id}/edit` | find an object by the id and update the hexidecimal color code | String. |
| **DELETE** | `/shades/{id}` | find an object by the id and delete the entire object | String. |

*Table 2*

| `brand` | `brandShort` | `product` | `productShort` |
|:----:|----------|-------| --------|
| Maybelline | mb | Fit Me | fmf |
|  |  | Fit Me Matte | fmm |
| bareMinerals | bm | barePro | pro |
| Estée Lauder | el | Double Wear | dw |
| Revlon | rv | ColorStay | cs |
| L'Oréal | lo | Infalliable | ipm |
|  |  | True Match | tms |
| Covergirl + Olay | oc | Simply Ageless | sa |
| Fenty | fe | PRO FILT'R | pf |
| Iman | im | Second to None | sn |
| Beauty Bakerie | bb | #1 CAKE MIX | cm |
| Black Up | bu | Matifying Fluid | mf |
| Black Opal | bo | True Color | tc |
| Laws of Nature | ln | Foxy Finish | ff |
| Lancôme | lc | Teint Idole | ti |
| MAC | ma | Studio Fix | sff |
| Bobbi Brown | br | Skin Long-Wear | slw |
| Make Up For Ever | mu | Ultra HD | uhd |
| Hegai and Ester | he | Photo Perfect | pp |
| House of Tara | ht | Oil Free | off |
| Trim & Prissy | tp | Flawless Finish | fff |
| Elsas Pro | ep | Full Coverage | fcf |
| Kuddy | ku | Matte Wear | mwf |
| RMK | rmk | RMK Liquid | lf |
| Addiction | ad | The Foundation | tf |
| Shu Uemera | su | Petal Skin Fluid | psf |
| Shiseido | sh | Synchro Skin | ss |
| Kate | ka | Secret Skin Maker Zero | ssm |
| IPSA | ip | Liquid Foundation | lf |
| Dior | di | Diorskin Forever | df |
| NARS | na | Velvet Matte | vm |
| Lakmé | la | Invisible Finish | if |
| Colorbar | cb | Perfect Match | pm |
| Bharat & Doris | bd | Liquid Foundation | lf |
| Olivia | ol | Foundation | fo |
| Blue Heaven | bh | X Factor | xf |
| Lotus Herbals | lh | Make-Up Ecostay | mue |
| Nykaa | ny | SKINgenius | sg |

## Goals
* Build an API using Express and Mongoose.
* Write at least one model.
* Incorporate complete CRUD functionality with RESTful routes.
* Write thorough documentation.
* Retrieve data from a data set to populate the database (link to data set [here](https://github.com/the-pudding/data/tree/master/makeup-shades)).

In the future, I would like to improve upon this API by...
* Using Swagger or apidoc for improved documentation.
* Have the server require a authentication token to accept requests.

## Example
This is an example object from the API:
```
  {
    "_id": "5dcc517504d50cc95efe3671",
    "brand": "Maybelline",
    "brandShort": "mb",
    "product": "Fit Me",
    "productShort": "fmf",
    "hex": "f3cfb3",
    "hue": 26,
    "saturation": 0.26,
    "value": 0.95,
    "lightness": 86,
    "group": 2,
    "__v": 0
  },
```
Each object represents one shade from a brand/line.

## Technologies Used
* Mongoose
* MongoDB
* Node.js
* Postman

## Contribution Guidelines
If you would like to contribute code, identify bugs, or propose improvements, please fork this repository and submit a pull request with your suggestions. Below are some links to help you get started:
1. [Project's main repository](https://github.com/shelbyvjacobs/makeup-shades-api)
2. [Project's issue tracker](https://github.com/shelbyvjacobs/makeup-shades-api/issues)
