const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db.js");

dotenv.config();

const app = express();

connectDB();

app.use(bodyParser.json());

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );

  app.use(morgan("dev"));
}

const authRouter = require("./routes/auth.route.js");

app.use("/api/", authRouter);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page Not Found",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
