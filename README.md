# makeup-shades-api

### Description
This project was to build a JSON API from the ground up.

### Features
The API is comprised of a JSON file with raw data (from [here](https://github.com/the-pudding/data/tree/master/makeup-shades)), a model built with Mongoose, Mongoose queries with RESTful paths, and a Node.js seed file.

### Getting Started
#### Base URL: (url here)
| Query | Path | Description | Additional Information |
|:--------:|:-------:| ------------| ----|
| **POST** | `/shades` | create a new object |  |
| **GET** | `/shades` | find all objects in database |  |
| **GET** | `/shades/brand/{brandShort}` | find by brand name | String. `brandShort` is a shortened version of the brand name. For instance, mb for Maybelline. |
| **GET** | `/shades/product/{productShort}` | find by product name | String. `productShort` is a shortened version of the product name. For instance, dw for Double Wear |
| **GET** | `/shades/hex/{hex}` | find by hex color code (no #) | String. |
| **GET** | `/shades/group/{group}` | find by country | Number. <br/>&bull; `2`: United States Best Sellers. <br/>&bull; `5`: Nigerian Best Sellers. <br/>&bull; `6`: Japanese Best Sellers. <br/>&bull; `7`: Indian Best Sellers. |
| **GET** | `/shades/{id}/edit` | find an object by the id and update the hex color code | String. |
| **DELETE** | `/shades/{id}` | find an object by the id and delete the entire object | String. |

### Goals
* Build an API using Express and Mongoose.
* Write at least one model.
* Incorporate complete CRUD functionality with RESTful routes.
* Write thorough documentation.
* Retrieve data from a data set to populate the database (link to data set [here](https://github.com/the-pudding/data/tree/master/makeup-shades)).

In the future, I would like to improve upon this API by...
* Using Swagger or apidoc for improved documentation.
* Have the server require a authentication token to accept requests.

### Example
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

### Technologies Used
* Mongoose
* MongoDB
* Node.js
* Postman

### Contribution Guidelines
If you would like to contribute code, identify bugs, or propose improvements, please fork this repository and submit a pull request with your suggestions. Below are some links to help you get started:
1. [Project's main repository](https://github.com/shelbyvjacobs/makeup-shades-api)
2. [Project's issue tracker](https://github.com/shelbyvjacobs/makeup-shades-api/issues)
