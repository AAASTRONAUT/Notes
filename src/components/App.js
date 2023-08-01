import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./notes";
import TakeInput from "./input";



function App(){

    var [noteList , appendNote] = useState([]);

    function addNote(newData){
        appendNote((prev , index)=>[...prev , {
            key:prev.length,
            title:newData.title,
            content: newData.content
        }]);
    }

    function deleteNote(currKey){
        var newList = noteList.filter((note , index)=> index!==currKey);
        console.log(newList);
        appendNote(newList);
    }

    return <div>
        <Header />
        <TakeInput addNote={addNote} />

        <div className="allnotes">
            {noteList.map((oneNote , index)=> 
            <Note 
                id={index} 
                title={oneNote.title} 
                body = {oneNote.content} 
                deleteNote={deleteNote} 
            />
            )}
        </div>

        <Footer/>
    </div>
}

export default App;
