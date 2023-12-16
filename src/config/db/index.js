const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/my_database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect fail");
  }
};
module.exports = { connect };
