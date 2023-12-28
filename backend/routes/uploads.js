const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const { projectService } = require("../services");

// Fotoğraf Silme - DELETE
router.delete("/:imageName", async (req, res) => {
  try {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, "../uploads/", imageName);

    if (!fs.existsSync(imagePath)) {
      return res.status(404).json({ message: "Image not found" });
    }

    await projectService.removeImageFromProject(imageName);

    fs.unlinkSync(imagePath);

    res.json({ message: "Image deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
