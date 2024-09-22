const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  auther: String,
  price: Number,
  image: String,
});

module.exports = model("book", bookSchema);
