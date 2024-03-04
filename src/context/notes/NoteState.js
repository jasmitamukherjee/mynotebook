import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const notesInitial=[
        {
          "_id": "65e4163f3be1cbb4767927ff",
          "user": "65e40815df414c7b74c6cb74",
          "title": "My Title",
          "description": "wake up early ",
          "tag": "personal",
          "date": "2024-03-03T06:18:39.141Z",
          "__v": 0
        }
      ]
   const [notes, setNotes] = useState(notesInitial)



    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
        
    )
}

export default NoteState;