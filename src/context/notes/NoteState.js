import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const s1 = {
        "name" : "jasmita",
        "class" : "12A"
    }
    const [state, setState] = useState(s1)
   const update=()=>{
        setTimeout(() => {
            setState({
                "name" : "adarsh",
                "class" : "12B"
            })
            
        }, 1000);
    }


    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
        
    )
}

export default NoteState;