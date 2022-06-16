const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

const createProduct = async (body) => {
    const product = await Product.create(body);
    return product;
  };
const updateProduct = async (id,body) =>{
  const product = await getProductById(id);
  Object.assign(product,body)
  return await product.save();
}
const getProductById = async id => {
  return await Product.findById(id);
}
const deleteProductById = async id => {
  const product = await getProductById(id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  await product.remove();
  return product;
};
const list = async ()=> {
  const products = await Product.find();
  if (!products) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  return products;
};

module.exports = {
  createProduct,
  updateProduct,
  getProductById,
  deleteProductById,
  list
};
