import React from "react";

function Note(){
    return (<div className="note">
        <h1>Title</h1>
        <p contentEditable="true" spellCheck="false">How's your day going on!!</p>
    </div>
    );
}

export default Note;