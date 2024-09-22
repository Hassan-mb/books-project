const express = require("express");
const app = express();
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./api/books/books.routes");
const errorHandler = require("./middlewears/errorHandler");
const notFoundHandler = require("./middlewears/notFoundHandler");
require("dotenv").config();
connectDB();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/books", router);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`The application is running on localhost:${process.env.PORT}`);
});
