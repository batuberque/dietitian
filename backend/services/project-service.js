const BaseService = require("./base-service");
const Project = require("../models/project");

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

  async removeImageFromProject(imagePath) {
    return this.updateMany(
      { images: imagePath },
      { $pull: { images: imagePath } }
    );
  }
}

module.exports = new ProjectService(Project);
