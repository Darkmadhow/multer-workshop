const express = require("express");
const picturesRouter = express.Router();
const picturesController = require("../controllers/pictures");

picturesRouter.get("/", picturesController);

module.exports = picturesRouter;
