const router = require("express").Router()
const fs = require("fs")
const util = require("util")
const db = require("../db/db.json")


//Get request from note api
router.get("/api/notes", (req, res)=>{
    res.json(db)
})


//function to read data from file to 
//be called when pushing data to .json file
//in db folder
/*
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if(err) {
      console.error(err)
    }
    else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData)
    }
  })
}
*/
router.post("/api/notes", (req, res)=>{
  console.log(req.body)
  //need to create post route 

  db.push(req.body)

  const { title, text } = req.body

  if (title && text) {
    const newNote = {
      title,
      text,
    }
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