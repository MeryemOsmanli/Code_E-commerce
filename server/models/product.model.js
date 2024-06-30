const mongoose = require('mongoose')
const ProductSchema = require('../schema/product.schema')

const ProductModel = mongoose.model('Products', ProductSchema)

module.exports = ProductModel