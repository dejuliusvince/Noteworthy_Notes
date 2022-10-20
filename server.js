const express = require("express")
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(apiRoutes)


app.use(htmlRoutes)




app.listen(PORT, ()=>{
  console.log("App is listening on port https://localhost:" + PORT)
})