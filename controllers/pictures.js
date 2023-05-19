const db = require("../utils/database");

async function picturesController(req, res) {
  const { rows: images } = await db.query("SELECT name, path FROM pictures");
  res.send(
    `<h1>Images</h1><br/><ul>${images.map(
      (image) => `<li><a href="${image.path}">${image.name}</a></li>`
    )}</ul>`
  );
}

module.exports = picturesController;
