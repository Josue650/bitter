require("dotenv").config();
require("./config/database");

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.locals.data = {};
  next();
});
app.use(logger("dev"));

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use(require("./config/checkToken"));
app.use("/api/users", require("./routes/api/users"));

const ensureLoggedIn = require("./config/ensureLoggedIn");

app.use("/api/comments", ensureLoggedIn, require("./routes/api/comments"));
app.use("/api/profile", ensureLoggedIn, require("./routes/api/profile"));
app.use("/api/tweets", ensureLoggedIn, require("./routes/api/tweets"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`I am listening on Port: ${PORT}`);
});
