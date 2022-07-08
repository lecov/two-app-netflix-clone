const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes")
const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, console.log("server started"));

mongoose.connect("mongodb://0.0.0.0:27017/two", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("DB Connected");
});

app.use("/api/user",userRoutes);