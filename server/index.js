import express from "express";
import mongoose from "mongoose";
import router from "./routes/auth.js";

const app = express();
app.use(express.json());

app.use("", router);

mongoose
  .connect(
    "mongodb+srv://dummyuser:dummyuser@cluster0.4j2dxvz.mongodb.net/zenapp?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("App running on the port 3000");
    });
  })
  .catch((e) => {
    console.log(`${e} did not connect`);
  });
