const db = require("../utils/database");

function profileUploadController(req, res) {
  console.log(req.file);
  if (req.fileTypeError) return res.send("Only image filetypes are allowed");
  if (!req.file)
    return res.send("Please choose a file from your local disk to upload");

  db.query("INSERT INTO pictures(name,path) VALUES ($1,$2)", [
    req.file.filename,
    req.file.path,
  ]);
  res.send(
    `<h1>Profile Picture uploaded</h1> <br> <img src="./${req.file.path}" alt="profile_picture" />`
  );
}

module.exports = profileUploadController;
