const cors = require("cors")
const express = require("express")
require("dotenv").config()
require("./config/database")
const app = express()
const router = require("./routes/index")

//Middlewares
app.use(cors())
app.use(express.json())

app.use("/api", router)

app.listen(4000, () => console.log("Server running on port 4000"))