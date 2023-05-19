const express = require("express");
const catUploadRouter = express.Router();
const catUploadController = require("../controllers/catupload");
const catupload = require("../utils/catupload");

catUploadRouter.post("/", catupload.array("cat_pics"), catUploadController);

module.exports = catUploadRouter;
