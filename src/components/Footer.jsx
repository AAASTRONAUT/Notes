import React from "react";

const date = new Date();
var year = date.getFullYear();

function footer(){
    return <footer><p>Copyright @ Astronaut {year}</p></footer>;
}

export default footer;