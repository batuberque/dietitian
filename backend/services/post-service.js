const BaseService = require("./base-service");
const Post = require("../models/post");

class PostService extends BaseService {
  async findByPostTitle(title) {
    return this.findBy("title", title);
  }

  async findByContent(content) {
    return this.find("content", content);
  }

  async findByCreatedAt(startDate, endDate) {
    return this.model.find({
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    });
  }
}

module.exports = new PostService(Post);
