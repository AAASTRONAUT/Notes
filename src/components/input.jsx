import React, {useState} from "react";

function TakeInput(param){

    var [data , setData] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        var name = event.target.name;
        var value = event.target.value;
        setData(prev => {
            return {...prev , [name]:value};
        })
    }

    return (
        <div className="input_note">
            <form>
                <input
                    onChange={handleChange}
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={data.title}
                ></input>
                <input
                    onChange={handleChange}
                    type="text"
                    name="content"
                    placeholder="Enter Content"
                    value={data.content}
                ></input>
                <button
                    className="inputBtn"
                    onClick={(event)=>{
                        param.addNote(data)
                        setData({
                            title:"",
                            content:""
                        })
                        event.preventDefault();
                        }
                    }
                >+</button>
            </form>
        </div>
    )
}

export default TakeInput;