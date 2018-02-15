const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"public")));

var configRoutes = require("./routes");
configRoutes(app);

app.listen(3000,function(){
    console.log("server running on port 3000...");
});