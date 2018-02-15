const path = require("path");
const homeRoutes = require("./home");
var constructorMethod = function(app){


    app.use("/",homeRoutes);

    app.use("*",function(req,res){
        res.status(404).json({error : "Page Not Found"});
    });
}

module.exports = constructorMethod;