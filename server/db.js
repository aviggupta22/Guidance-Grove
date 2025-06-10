const mongoose = require("mongoose");
const uri = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.2`;

const connectToMongo = () => {
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("connection success to Mongo");
    }
  );
};
module.exports = connectToMongo;

