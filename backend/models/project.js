const mongoose = require("mongoose");

const fileTypes = /\.(png|jpg|jpeg)$/i;

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 80,
  },
  images: {
    type: [String],
    required: true,
    validate: [arrayLimit, "En fazla 10 resim yüklenebilir"],
    validate: {
      validator: function (v) {
        return v.every((url) => fileTypes.test(url));
      },
      message: (props) =>
        `${props.value} geçerli bir resim dosyası değil! Sadece PNG, JPG veya JPEG dosyaları kabul edilir.`,
    },
  },
  description: {
    type: String,
  },
  subtitle: {
    type: String,
    maxlength: 280,
  },
});

function arrayLimit(val) {
  return val.length <= 10;
}

ProjectSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Project", ProjectSchema);
