let express = require("express");
let bodyParser = require("body-parser");
let db = []
app = express();

app.engine('html',require('ejs').renderFile)
app.set('view engine', 'html');

app.use(express.static('images'));
app.use(express.static('css'));

app.use(bodyParser.urlencoded({
    extended: false
})) //req.body = {name:xx, age: sss}

//app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.render('index.html')
})

app.get("/newTask",(req,res)=>{
    res.render("newTask.html")
})

app.post("/addNewTask", (req,res)=>{
   
    db.push(req.body);
    console.log(db)
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/listTask", (req,res)=>{
    res.render("taskList.html", {taskDb:db})
})


app.listen(8080);

