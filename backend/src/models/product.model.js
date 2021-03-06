const mongoose = require('mongoose');
const productSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      price:{
        type:Number,
        require: true,
      }
    },
    {
      timestamps: true,
    }
  );
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
