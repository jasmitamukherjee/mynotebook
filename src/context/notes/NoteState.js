import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const notesInitial=[
        {
          "_id": "65e4163f3be1cbb4f767927ff",
          "user": "65e40815df414c7b74c6cb74",
          "title": "My Title",
          "description": "wake up early ",
          "tag": "personal",
          "date": "2024-03-03T06:18:39.141Z",
          "__v": 0
        },
        {
            "_id": "65e4163f3be1cbfdfb4767927ff",
            "user": "65e40815df414c7b74c6cb74",
            "title": "My Title",
            "description": "wake up early ",
            "tag": "personal",
            "date": "2024-03-03T06:18:39.141Z",
            "__v": 0
          },
          {
            "_id": "65e4163f3be1cefebb4767927ff",
            "user": "65e40815df414c7b74c6cb74",
            "title": "My Title",
            "description": "wake up early ",
            "tag": "personal",
            "date": "2024-03-03T06:18:39.141Z",
            "__v": 0
          },
          {
            "_id": "65e4163f3behd1cbb4767927ff",
            "user": "65e40815df414c7b74c6cb74",
            "title": "My Title",
            "description": "wake up early ",
            "tag": "personal",
            "date": "2024-03-03T06:18:39.141Z",
            "__v": 0
          },
          {
            "_id": "65e4163f3be1cwebb4767927ff",
            "user": "65e40815df414c7b74c6cb74",
            "title": "My Title",
            "description": "wake up early ",
            "tag": "personal",
            "date": "2024-03-03T06:18:39.141Z",
            "__v": 0
          },
          {
            "_id": "65e4163f3be1grecbb4767927ff",
            "user": "65e40815df414c7b74c6cb74",
            "title": "My Title",
            "description": "wake up early ",
            "tag": "personal",
            "date": "2024-03-03T06:18:39.141Z",
            "__v": 0
          }
        
      ]

   const [notes, setNotes] = useState(notesInitial)

        //add note 

        const addNote=(title,description,tag)=>{
            //todo api call
            console.log("Adding a new note")
            const note=  {
                "_id": "65e4163f3be1grecbb4767927ff",
                "user": "65e40815df414c7b74c6cb74",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2024-03-03T06:18:39.141Z",
                "__v": 0
              }
            setNotes(notes.concat(note))



        }

        //delete note 

        const deleteNote=(id)=>{

            console.log("deleted note with id : "+id);
            const newNotes = notes.filter((note)=> {return note._id!==id})
            setNotes(newNotes)

        }



        //edit note
        const editNote=(id,title,description,tag)=>{

        }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
        
    )
}

export default NoteState;