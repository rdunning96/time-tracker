const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config.js");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// connect to mongoDB database
const db = require("./app/models");
const Role = db.role;

const path = `mongodb+srv://${dbConfig.USER}:${dbConfig.PW}@cluster0.qict0g0.mongodb.net/?retryWrites=true&w=majority`;
db.mongoose
  .connect(path, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/booking.routes")(app);
require("./app/routes/room.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const path_prod = require("path");

if (process.env.NODE_ENV === "production") {

    app.use(express.static("client/build"));

    app.get("*", (req, res) => {

    res.sendFile(path_prod.resolve(__dirname, "client", "build", "index.html"));

   });

}

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
