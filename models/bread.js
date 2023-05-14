const mongoose = require("mongoose");

const breadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hasGluten: {
    type: Boolean,
  },
  image: {
    type: String,
    default: "https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg",
  },
});

module.exports = mongoose.model("Bread", breadSchema);

// MVC is our Models, Views, and our Controllers.
// Models is about our data and how it's structured
// Views is what our users see and interact with
// Controllers combine the models and Views and handles the interaction between these 2.

// Also, Mongoose Helper Methods such as Bread.find() or Bread.findbyID() are all ASYNC. Database is always ASYNC related.

// In javascript "" an expty string is false or doesnt exist. However, in Mongoose an expty string is a value.
