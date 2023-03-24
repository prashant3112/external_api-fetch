const express = require("express");

const router = express.Router();

const controllers = require("../controllers/index");

router.get("/jokes/:count",controllers.getjokes);
//(async() =>  {console.log(await controllers.getjokes());})()

//router.get("/jokes/",controllers.getjokes);


router.get("*",(req,res) => {
    res.send("<h1>404</h1>");
});

module.exports = router;