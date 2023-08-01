import React from "react";

function Note(param){

    return (<div className="note">
        <h1>{param.title}</h1>
        <p>{param.body}</p>
        <button onClick={()=>param.deleteNote(param.id)}>Delete</button>
    </div>
    );
}

export default Note;