const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./cat-pics"),
  filename: (req, file, cb) => cb(null, Date.now() + file.originalname),
});

const fileFilter = (req, file, cb) => {
  const fileType = file.mimetype.split("/")[0];
  if (fileType !== "image") {
    req.fileTypeError = true;
    return cb(null, false, req.fileTypeError);
  }
  cb(null, true);
};

const catupload = multer({ storage, fileFilter });

module.exports = catupload;
