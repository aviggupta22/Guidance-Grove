const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  classsp: {
    type: String,
  },
  work: {
    type: String,
  },
  company: {
    type: String,
  },
  experience: {
    type: String,
  },
  img: {
    type: String,
  },
  subject: {
    type: String,
  },
  session: [
    {
      title: String,
      description: String,
      date: String,
      time: String,
      creator: String,
      link: String,
    },
  ],
  reviews: [
    {
      fromName: String,
      fromEmail: String,
      review: String,
    },
  ],
});
const User = new mongoose.model("user", UserSchema);
User.createIndexes();
module.exports = User;
