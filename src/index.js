const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();
const port= process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(cors());
app.use("/api", userRoutes);
//routes
app.get("/",(req,res)=>{
    res.send("welcome to my API");
});

//mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("estas conectado a la base de mongo"))
.catch((error)=>console.error(error));


app.listen(port,()=>console.log("Servidor esta escuchando beibi",port));