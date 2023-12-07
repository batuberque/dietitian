const { postService } = require("../services");

const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send(await postService.load());
});

router.post("/", async (req, res) => {
  const post = await postService.insert(req.body);

  res.send(post);
});

router.delete("/:postId", async (req, res) => {
  await postService.removeBy("_id", req.params.postId);

  res.send("OK");
});

router.get("/:postId", async (req, res) => {
  const post = await postService.find(req.params.postId);
  if (!post) return res.status(404).send("Cannot find post");
  res.render("post", { post });
});

router.patch("/:postId", async (req, res) => {
  const { postId } = req.params;
  const { name } = req.body;

  await postService.update(postId, { name });
});

module.exports = router;
