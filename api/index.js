const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");
const cartRouter = require("./routes/cart");
const productRouter = require("./routes/product");
const authRouter = require("./routes/auth");
const stripeRouter = require("./routes/stripe");


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

app.use(cors())
app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/stripe", stripeRouter);



app.listen(port, () => {
  console.log(`Backend server is running !! App listening on port ${port} !!`);
});
