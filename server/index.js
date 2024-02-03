import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("App running on the port 3000");
});
