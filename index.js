const express= require("express");
const app =express();

//const request = require('request');

const router = require("./routes/index");
const bodyParser = require('body-parser');
const querystring = require('querystring');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port =3050;
app.use(express.json());

app.use("/api",router);

app.get("/",(req,res)=>{
    res.send(
        "<body style='background-color:cyan'><h1 style='text-align:center; font-size:50px'>Welocme to laugh club</h1></body>" 
    );
});

app.get("*",(req,res)=>{
    res.send(
        "<body style='background-color:cyan'><h1 style='text-align:center; font-size:50px'>ERROR 404</h1></body>" 
    );
});
app.listen(port,() =>{
    console.log("my server is running at port No",port);

});