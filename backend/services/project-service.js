const BaseService = require("./base-service");
const Project = require("../models/project");
const path = require("path");
const fs = require("fs");

class ProjectService extends BaseService {
  async findByProjectName(name) {
    return this.findBy("name", name);
  }

  async findByProjectId(id) {
    return this.findBy("_id", id);
  }

  async findByImageId(imageId) {
    return this.query({ images: { $in: [imageId] } });
  }

  async removeImage(imagePath) {
    try {
      const sanitizedImagePath = imagePath.replace(/uploads\/?/, "");
      const filePath = path.join(__dirname, "../uploads", sanitizedImagePath);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (err) {
      console.error("Error deleting image from filesystem:", err);
      throw err;
    }
  }

  async removeImageFromProject(projectId, imagePath) {
    try {
      console.log("Removing image:", imagePath, "from project:", projectId);

      await this.removeImage(imagePath);

      const updateResult = await this.model.updateOne(
        { _id: projectId },
        { $pull: { images: imagePath } }
      );

      return updateResult;
    } catch (err) {
      console.error("Error removing image from project:", err);
      throw err;
    }
  }
}

module.exports = new ProjectService(Project);
