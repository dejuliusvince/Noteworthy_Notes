const router = require("express").Router()
const fs = require("fs")
const db = require("../db/db.json")



router.get("/api/notes", (req, res)=>{
    res.json(db)
})

router.post("/api/notes", (req, res)=>{
  //need to create post route 
  
  //need to push value from req.body to db array
  //need to update the revised db with new data 
  //into db.json file
  
  console.log(req.body)
})

module.exports = router