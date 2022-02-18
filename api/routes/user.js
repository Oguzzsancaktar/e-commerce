const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("Hello World 3");
});

router.post("/post", (req, res) => {
  const { username } = req.body;
  console.log(username);
  res.send(username);
});

module.exports = router;
