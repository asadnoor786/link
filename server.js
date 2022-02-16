const fs = require("fs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log("Server Has Started!");
});
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb+srv://asadnoor:shaguftanaz@cluster0.araou.mongodb.net/minecraftalts?retryWrites=true&w=majority', {useNewUrlParser : true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, "error"));
db.once('open', ()=>{
    console.log("Connected!");
});
const shortStruc = new mongoose.Schema({
    link1 : String,
    link2 : String
});
const short = mongoose.model("short", shortStruc);
app.get("/continue:id", (req, res) => {
    var myPath = req.path;
    myPath = myPath.replace("/continue:", "");
    console.log(myPath);
    short.find({link2 : myPath}, (err, myLink) => {
        if(myLink.length == 0) {
            res.end("Bad Reuqest");
        }
        else {
            myLink = myLink[0];
            res.end(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <meta charset="UTF-8">
    <script src="JS/page1.js"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Ur Link Now!</title>
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,200&display=swap');
    *{
        padding:0px;
        margin:0px;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
        height: 1900px;
        width: 100% !important;
        /* overflow-y:scroll; */
        background: #181818;
        display: flex;
        /* overflow: hidden; */
        align-items: center;
        flex-direction: column;
        flex-wrap: nowrap;
        border: 1px solid black;
    }
    .head{
        margin-top: 30px;
        color: white;
        font-weight: 600;
        font-size: 45px;
        bottom: 10px;
    }
    .adv1{
        height: 300px;
        width: 320px;
        background: white;
        margin-top: 50px;
        border: 1px solid black;
    }
    .btn{
        width: 150px;
        height: 50px;
        font-size: 18px;
        margin-top: 50px;
    }
    #btn2{
        display: none;
    }
    .adv2{
        height: 300px;
        width: 320px;
        background: white;
        margin-top: 50px;
        border: 1px solid black;
    }
    .adv3{
        height: 300px;
        width: 320px;
        background: white;
        margin-top: 50px;
        border: 1px solid black;
    }
    #ad4{
        height: 300px;
        width: 320px;
        background: white;
        margin-top: 50px;
        border: 1px solid black;
    }
    @media screen and (max-width: 420px) {
        .head{
            font-size: 30px;
        }
    }
    </style>
<body onload="loadBody()">
        <div class="head">Technical Tricks</div>
        <div class="adv1"></div>
        <a id="link1" href="#"><button type="button" onclick="getLink1()" class="btn btn-success" id="btn1">Please Wait..</button></a>
        <div class="adv2" id="ad2"></div>
        <div class="adv2" id="ad4"></div>
        <a href="/getLink:${myLink['link2']}"><button type="button" class="btn btn-success" id="btn2">Get Link</button></a>
        <div class="adv2"></div>
</body>
</html>
            `);
        }
    });
});
app.get("/getLink:id", (req, res) => {
    var myPath = req.path;
    myPath = myPath.replace("/getLink:", "");
    console.log(myPath);
    short.find({link2 : myPath}, (err, myLink) => {
        if(myLink.length == 0) {
            res.end("Bad Reuqest");
        }
        else {
            myLink = myLink[0];
            res.end(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <meta charset="UTF-8">
    <script src="JS/page2.js"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Ur Link Now!</title>
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,200&display=swap');
    *{
        padding:0px;
        margin:0px;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
        height: 1900px;
        width: 100% !important;
        /* overflow-y:scroll; */
        background: #181818;
        display: flex;
        /* overflow: hidden; */
        align-items: center;
        flex-direction: column;
        flex-wrap: nowrap;
        border: 1px solid black;
    }
    .head{
        margin-top: 30px;
        color: white;
        font-weight: 600;
        text-align: center;
        font-size: 40px;
        bottom: 10px;
    }
    .adv1{
        height: 300px;
        width: 320px;
        background: white;
        margin-top: 50px;
        border: 1px solid black;
    }
    .btn{
        width: 150px;
        height: 50px;
        font-size: 18px;
        margin-top: 50px;
    }
    #btn2{
        display: none;
    }
    .adv2{
        height: 300px;
        width: 320px;
        background: white;
        margin-top: 50px;
        border: 1px solid black;
    }
    .adv3{
        height: 300px;
        width: 320px;
        background: white;
        margin-top: 50px;
        border: 1px solid black;
    }
    #ad4{
        height: 300px;
        width: 320px;
        background: white;
        margin-top: 50px;
        border: 1px solid black;
    }
    @media screen and (max-width: 420px) {
        .head{
            font-size: 30px;
        }
    }
    </style>
<body onload="loadBody()">
        <div class="head">Final Step</div>
        <div class="adv1"></div>
        <a id="link1" href="#"><button type="button" onclick="getLink1()" class="btn btn-success" id="btn1">Generating...</button></a>
        <div class="adv2" id="ad2"></div>
        <div class="adv2" id="ad4"></div>
        <a href="${myLink['link1']}"><button type="button" style="width: 240px;" class="btn btn-success" id="btn2">Click Here To Get Link</button></a>
        <div class="adv2"></div>
</body>
</html>
            `);
        }
    });
});
app.get("/temp", (req, res) => {
    res.sendFile(__dirname+"/public/temp.html");
});

app.post("/temp", (req, res) => {
    var item = req.body;
    console.log(item);
    var data = new short(item);
    data.save().then(() => {
        res.end(`
        Done Link Path Is ${req.body.link2}
        `);
    })
});