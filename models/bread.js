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
  baker: {
    type: mongoose.Types.ObjectId, // Creating a relationship between bread and baker models. Baker is the parent of the child, bread. The child ALWAYS need to reference the parent.
    ref: "Baker", //Referencing our baker model
  },
});

breadSchema.methods.getBakedBy = function () {
  return `${this.name} was baked with love by ${
    this.baker.name
  } who has been with us since ${this.baker.startDate.getFullYear()}`;
};

module.exports = mongoose.model("Bread", breadSchema); //When naming models always keep them singular. Because it is a model of 1

// MVC is our Models, Views, and our Controllers.
// Models is about our data and how it's structured
// Views is what our users see and interact with
// Controllers combine the models and Views and handles the interaction between these 2.

// Also, Mongoose Helper Methods such as Bread.find() or Bread.findbyID() are all ASYNC. Database is always ASYNC related.

// In javascript "" an expty string is false or doesnt exist. However, in Mongoose an expty string is a value.
