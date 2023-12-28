const { projectService } = require("../services");
const router = require("express").Router();
const upload = require("../lib/multerConfig");

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
router.put("/:id", async (req, res) => {
  try {
    const project = await projectService.update(req.params.id, req.body);
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

module.exports = router;
