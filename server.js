const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const song = require("./routes/song");
const artist = require("./routes/artist");
const user = require("./routes/user");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/error");
const connectDB = require("./config/db");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "config/config.env" });

connectDB();

const app = express();

app.use(bodyParser.json());

app.use(logger);
app.use(fileUpload());
app.use(cookieParser());

app.use("/song", song);
app.use("/artist", artist);
app.use("/user", user);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
