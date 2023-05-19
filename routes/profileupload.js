const express = require("express");
const profileUploadRouter = express.Router();
const profileUploadController = require("../controllers/profileupload");
const upload = require("../utils/fileupload");

profileUploadRouter.post(
  "/",
  upload.single("profile_pic"),
  profileUploadController
);

module.exports = profileUploadRouter;
