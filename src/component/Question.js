import {useState} from "react";

function Question({question}){
    return (
        <p className="questionStatement">{question}</p>
    );
}

export  default Question;