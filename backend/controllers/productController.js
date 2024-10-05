import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc  FETCH ALL PRODUCTS
// @routes GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc  FETCH A PRODUCT
// @routes GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  console.log(req.params.id);

  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource Not Found!");
  }
});

export { getProductById, getProducts };
