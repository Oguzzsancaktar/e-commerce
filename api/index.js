const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_LOCAL)
  .then(() => {
    console.log("db connected !!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/users ", userRouter);

app.listen(port, () => {
  console.log(`Backend server is running !! App listening on port ${port} !!`);
});
