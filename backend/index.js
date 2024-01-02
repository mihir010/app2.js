const express = require("express");
const app = express();
const routing = require("./Router/routes");
require("./db/conn.js");
const cors = require("cors");


app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
}));
app.use(routing);

app.listen(5000, ()=>{
    console.log("listening on port 5000");
});

app.get("/", (req, res)=>{
    res.send("hello world");
})