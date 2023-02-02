const express = require("express");
const router = express.Router();
const {
  checkToken,
  dataController,
  apiController,
} = require("../../controller/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

//localhost:3001/api/users
router.post("/", dataController.create, apiController.auth);
//localhost:3001/api/users
router.get("/", dataController.getUser, apiController.respondWithUser);
//localhost:3001/api/users/login
router.post("/login", dataController.login, apiController.auth);
//localhost:3001/api/users/profile
router.get("/profile", dataController.getUserProfile, apiController.respondWithProfile)
//localhost:3001/api/users/check-token
router.get("/check-token", ensureLoggedIn, checkToken);

module.exports = router;
