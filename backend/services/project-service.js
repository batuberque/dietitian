const BaseService = require("./base-service");
const Project = require("../models/project");
const path = require("path");
const fs = require("fs");

const { Storage } = require("@google-cloud/storage");
const storage = new Storage({ keyFilename: process.env.GCLOUD_KEY_FILE });
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);

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

  async removeImageFromGCS(imagePath) {
    try {
      // console.log("Removing image from GCS:", imagePath);
      const sanitizedImagePath = imagePath.replace(/^uploads\/?/, "");
      await bucket.file(sanitizedImagePath).delete();
      // console.log("Image deleted from GCS:", sanitizedImagePath);
    } catch (err) {
      console.error("Error deleting image from GCS:", err);
      throw err;
    }
  }

  async removeImageFromProject(projectId, imagePath) {
    try {
      const dbImagePath = imagePath.replace(/^uploads\/uploads\//, "uploads/");

      await this.model.updateOne(
        { _id: projectId },
        { $pull: { images: dbImagePath } }
      );

      await this.removeImageFromGCS(imagePath);

      // console.log(`Image ${dbImagePath} removed from project ${projectId}`);

      return await this.findByProjectId(projectId);
    } catch (err) {
      console.error("Error removing image from project:", err);
      throw err;
    }
  }
}

module.exports = new ProjectService(Project);
