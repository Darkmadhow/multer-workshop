const db = require("../utils/database");

function catUploadController(req, res) {
  console.log(req.files);
  if (req.fileTypeError) return res.send("Only image filetypes are allowed");
  if (!req.files || req.files.length == 0)
    return res.send("Please choose a file from your local disk to upload");

  req.files.map((image) =>
    db.query("INSERT INTO pictures(name,path) VALUES ($1,$2)", [
      image.filename,
      image.path,
    ])
  );
  res.send(
    `<h1>Cat Pictures uploaded</h1> <br> 
      ${req.files.map(
        (image) => `<img src="./${image.path}" alt="${image.originalname}" />`
      )}`
  );
}

module.exports = catUploadController;
