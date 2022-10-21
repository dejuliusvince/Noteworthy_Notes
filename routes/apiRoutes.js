//import necessary libraries and databse 

const router = require("express").Router()
const fs = require("fs")
const util = require("util")
const db = require("../db/db.json")
const { uid } = require("uid")


//Get request from note api
router.get("/api/notes", (req, res)=>{
    res.json(db)
})

//need a post route to create new notes and save them to database

router.post("/api/notes", (req, res)=>{
  console.log(req.body)
 
//push new note object to db.json file
  db.push(req.body)

  const { title, text } = req.body

  //need to give notes an id in order to
  //render them when clicked based on front-end
  //javascript methods for showing notes
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uid(),
    }
    //read 
    fs.readFile('./db/db.json', 'utf8', (err,data)=>{
      if (err){
          console.error(err)
      }
      else {
        const parsedNotes = JSON.parse(data)

        parsedNotes.push(newNote)

        fs.writeFile('./db/db.json', JSON.stringify(parsedNotes),
        (writeErr) => 
          writeErr
            ? console.error(writeErr)
            : console.info('Updated notes successfully')
                        
        )
      }
    })
    const response = {
      status: 'success',
      body: newNote,
    }

    console.log(response)
    res.status(201).json(response)
  } 
  else {
    res.status(500).json('Error when posting note')
  }
    
})

module.exports = router