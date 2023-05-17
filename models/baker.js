const mongoose = require("mongoose");

const bakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["Rachel", "Ross", "Monica", "Joey", "Chandler", "Phoebe"], //These are the only valid options for Bakers.
    },
    startDate: {
      type: Date,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
  },
  {
    toJSON: { virtuals: true },
  }
);

bakerSchema.virtual("breads", {
  //We named this plural because virtuals will always be an array so we keep the name plural
  ref: "Bread", //Reference to our Bread Model.
  localField: "_id", //We use _ infront of id because that's how MongoDB is structured
  foreignField: "baker", //This is the id that references the parent. We can look back into the breads model to see that 'baker' is the reference made to our parent. line 15 in our bread model
});

module.exports = mongoose.model("Baker", bakerSchema); //When naming models always keep them singular. Because it is a model of 1

// //We named our .virtual "breads" plural because virtuals will always be an array so we keep the name plural. It is a one - to - many relationship
