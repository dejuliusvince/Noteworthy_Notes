const router = require("express").Router()
const path = require("path")

//get routes for homepage and Note taker app page
//need to return the notes.html file and index. html file when requested

router.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router