import React from "react";
import ReactDOM from 'react-dom';

const date = new Date();
var year = date.getFullYear();

function footer(){
    return <footer><p>Copyright @ Astronaut {year}</p></footer>;
}

export default footer;