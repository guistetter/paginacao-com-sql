const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000
const mysql = require("mysql")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))

const pessoas = require("./routes/pessoas")

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user:"root",
  password: "123456",
  database: "cadastro"
})

const dependencies = {
  connection
}



app.use(express.static("public"))

//view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")


connection.connect(()=>{
  app.listen(port,() => console.log("Servidor rodando porta: ",port))
})

app.get("/", (req,res) => res.render("home"))

app.use("/pessoas", pessoas(dependencies))
 
