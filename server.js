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
app.use(express.static(path.join(__dirname, "client/build")));
app.get("/", (req, res) => {
  res.send(index.html);
});

app.post("/file", upload.single("data"), function(req, res, next) {
  // loc = req.body;
  res.send("done");
  console.log(`./uploads/` + req.file.filename);
  csv()
    .fromFile(`./uploads/` + req.file.filename)
    .then(jsonObj => {
      info = jsonObj.slice(1, 3000);
    });
  // const jsonArray = await csv().fromFile(csvFilePath);
});

app.get("/result", (req, res) => {
  var arr = info.filter(function(el) {
    return (
      el.to_long != "NULL" &&
      el.from_lat != "NULL" &&
      el.from_long != "NULL" &&
      el.from_area_id != "NULL" &&
      el.from_long != "NULL" &&
      el.to_lat != "NULL"
    );
  });

  res.send(arr);

  // res.send({"hello":1,"hello":2,"hello":3});
});

if (process.env.NODE_ENV === "production") {
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(`${__dirname}/client/build`, "index.html");
  });
}
