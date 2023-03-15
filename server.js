const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const song = require("./routes/song");
const artist = require("./routes/artist");
const user = require("./routes/user");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/error");

dotenv.config({ path: "config/config.env" });

const app = express();

app.use(bodyParser.json());

app.use(logger);

app.use("/song", song);
app.use("/artist", artist);
app.use("/user", user);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
