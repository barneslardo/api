const mongoose = require("mongoose");
const { Schema } = mongoose;

const Lead = new Schema({
  name: String,
  email: String
});

module.exports = mongoose.model("Lead", Lead);
