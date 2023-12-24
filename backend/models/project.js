const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 80,
  },
  images: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  subtitle: {
    type: String,
    maxlength: 280,
  },
});

ProjectSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Project", ProjectSchema);
