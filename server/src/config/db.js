const mongoose = require("mongoose");
const DB_URL = require("../constants/index");

mongoose.Promise = global.Promise;

mongoose.set("debug", true);

try {
  mongoose.connect(DB_URL, { useNewUrlParser: true });
} catch (error) {
  mongoose.createConnection(DB_URL, {
    useNewUrlParser: true
  });
}

mongoose.connection
  .once("open", () => console.log("MongoDB running"))
  .on("error", e => {
    throw e;
  });
