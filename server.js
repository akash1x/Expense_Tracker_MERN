const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
app.use(express.json());

const dbURI = config.get("mongoURI");

const transactions = require("./routes/api/transactions");

app.use(express.json());

app.use("/api/transactions/", transactions);

mongoose
  .connect(dbURI)
  .then(console.log("DB connected.."))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
