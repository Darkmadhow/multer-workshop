require("dotenv").config();
const express = require("express");
const app = express();
const profileUploadRouter = require("./routes/profileupload");
const catUploadRouter = require("./routes/catupload");
const picturesRouter = require("./routes/pictures");
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.static("profile-pics"));
app.use(express.static("cat-pics"));

app.use("/upload-profile-pic", profileUploadRouter);
app.use("/upload-cat-pics", catUploadRouter);
app.use("/get-pics", picturesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
