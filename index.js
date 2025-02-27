const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, ()=>{
    console.log("app listening on port #" + PORT);
})
app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"index.html"));
});