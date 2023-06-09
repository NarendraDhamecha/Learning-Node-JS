const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/errorController")
const contactUsRoutes = require("./routes/contactUs");
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes);

app.use("/shop", shopRoutes);

app.use("/contactus", contactUsRoutes)

app.use(errorController.error404)

app.listen(3000);
