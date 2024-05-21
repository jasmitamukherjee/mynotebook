import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const host= "https://mynotebook-back-fty4.onrender.com"
    const notesInitial=[
       
        
      ]

   const [notes, setNotes] = useState(notesInitial)

        //add note 

        const addNote= async(title,description,tag)=>{
            //todo api call


            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": localStorage.getItem('token')
               
                },
                
                body: JSON.stringify({title,description,tag}), 
              });

            //   const json=response.json();
            //   console.log(json)
             
              
            

            console.log("Adding a new note")
            const note=  await response.json();
            // {
            //     "_id": "65e4163f3be1grecbb4767927ff",
            //     "user": "65e40815df414c7b74c6cb74",
            //     "title": title,
            //     "description": description,
            //     "tag": tag,
            //     "date": "2024-03-03T06:18:39.141Z",
            //     "__v": 0
            //   }
            setNotes(notes.concat(note))



        }

        //delete note 

        const deleteNote=async (id)=>{

            //api 
            const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": localStorage.getItem('token')
               
                }
              });
              const json= await response.json();
              console.log(json)

            console.log("deleted note with id : "+id);
            const newNotes = notes.filter((note)=> {return note._id!==id})
            setNotes(newNotes)

        }


        //get all notes
         //todo api call


         const getNotes= async ()=>{
         const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem('token')
           
            }
            
           
          });
          const json= await response.json();
          
          setNotes(json);
        
        }

        //edit note
        const editNote= async(id,title,description,tag)=>{
            //api 
            
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": localStorage.getItem('token')
               
                },
                
                body: JSON.stringify({title,description,tag}), 
              });
              
              const json=await response.json();
              console.log(json)
             

            //addd in client


            let newNotes= JSON.parse(JSON.stringify(notes))
            for (let index = 0; index < newNotes.length; index++) {
                const element = newNotes[index];
                if(element._id === id ){
                    // newNotes[title]= title;
                    // newNotes[description]=description;
                    // newNotes[tag]= tag;
                    element.title = title;
                    element.description = description;
                    element.tag = tag;
                    break;

            }
           

                
            }
            setNotes(newNotes)
           

        }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
        
    )
}

export default NoteState;