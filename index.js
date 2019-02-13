const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const postRoute = require("./routes/apiRoutes");
const app = express();

require("./models/Lead");

mongoose.promise = global.promise;
mongoose
  .connect(
    keys.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Cannot connect to database");
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/post", postRoute);

const PORT = process.env.PORT || 5050;
app.listen(PORT, console.log("Server is running on " + PORT));
