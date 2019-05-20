const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log("Server is running at:", PORT);
});
