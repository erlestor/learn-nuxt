import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 3000

app.get("/", (req, res) => {
  res.status(200)
  res.send("Welcome to root URL of Server")
})

app.listen(PORT, () => {
  console.log(
    "Server is Successfully Running, and App is listening on port " + PORT
  )
})
