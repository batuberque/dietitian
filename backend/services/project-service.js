const BaseService = require("./base-service");
const Project = require("../models/project");

class ProjectService extends BaseService {
  async findByProjectName(name) {
    return this.findBy("name", name);
  }

  async findByProjectDescription(description) {
    return this.findBy("description", description);
  }
}

module.exports = new ProjectService(Project);
