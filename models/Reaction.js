const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
      // Format the timestamp as a string using the toLocaleDateString method
      return new Date(timestamp).toLocaleDateString();
    },
  },
});

const Reaction = mongoose.model("Reaction", reactionSchema);

module.exports = Reaction;
