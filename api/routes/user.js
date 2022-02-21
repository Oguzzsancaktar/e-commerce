const User = require("../models/User");
const CryptoJS = require("crypto-js");

const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// Get All Users
router.get("/", async (req, res) => {
  const query = req.query.new;
  const admin = req.query.admin;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : admin
      ? await User.find({ isAdmin: admin })
      : await User.find({});
    !users && res.status(404).json("Users not found");
    res.json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});
// Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.decrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(CryptoJS.enc.Utf8);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get User
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get User Stats
router.get("/stats", verifyTokenAndAuthorization, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },{
        $group:{
          _id:"$month",
          total:{$sum:1}
        }
      }
    ]);
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
