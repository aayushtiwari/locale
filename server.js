var express = require("express");
var multer = require("multer");
const csv = require("csvtojson");
var bodyParser = require("body-parser");
var upload = multer({ dest: "uploads/" });
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//variables
var info;
var loc;

//server
var port = process.env.PORT || 8888;
app.listen(port, console.log("server is running at :", port));
app.use(express.static("src"));
app.get("/", (req, res) => {
  res.send(index.html);
});

app.post("/file", upload.single("data"), function(req, res, next) {
  loc = req.body;
  console.log(loc);
  console.log(`./uploads/` + req.file.filename);
  csv()
    .fromFile(`./uploads/` + req.file.filename)
    .then(jsonObj => {
      info = jsonObj;
    });
  // const jsonArray = await csv().fromFile(csvFilePath);
});

app.get("/result", (req, res) => {
  res.send(info);
  // res.send({"hello":1,"hello":2,"hello":3});
});
