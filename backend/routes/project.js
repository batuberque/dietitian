const { projectService } = require("../services");
const router = require("express").Router();
const upload = require("../lib/multerConfig");
const fs = require("fs");
const path = require("path");

// Tüm Projeleri Listeleme - GET
router.get("/", async (req, res) => {
  try {
    const projects = await projectService.load();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Yeni Proje Ekleme - POST
router.post("/", upload.array("images", 10), async (req, res) => {
  try {
    const projectData = {
      ...req.body,
      images: req.files.map((file) => file.path),
    };

    const project = await projectService.insert(projectData);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Proje Güncelleme - PUT
router.put("/:id", upload.array("images", 10), async (req, res) => {
  try {
    const projectId = req.params.id;
    const projectData = {
      ...req.body,
      images: req.files.map((file) => file.path),
    };

    const project = await projectService.update(projectId, projectData);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Proje Silme - DELETE
router.delete("/:id", async (req, res) => {
  try {
    await projectService.removeBy("_id", req.params.id);
    res.json({ message: "Project deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Projeyi ID'sine Göre Bulma - GET
router.get("/:id", async (req, res) => {
  try {
    const project = await projectService.findByProjectId(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Proje Resimlerini Güncelleme - PUT
router.put("/:id/images", upload.array("images", 10), async (req, res) => {
  try {
    const projectId = req.params.id;
    const imagePaths = req.files.map((file) => file.path);
    const updatedProject = await projectService.updateImages(
      projectId,
      imagePaths
    );
    if (!updatedProject)
      return res.status(404).json({ message: "Project not found" });
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Proje Resmi Silme - DELETE
router.delete("/:id/images/:imageName", async (req, res) => {
  try {
    const projectId = req.params.id;
    const imageName = req.params.imageName;

    const project = await projectService.find(projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    project.images = project.images.filter((img) => img !== imageName);
    await project.save();

    const filePath = path.join(__dirname, "../uploads", imageName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.json({ message: "Image deleted", project });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
