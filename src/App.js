import logo from './logo.svg';
import './App.css';
import Quiz from "./component/Quiz";
import React, {useState} from "react";
import Result from "./component/Result";

function App() {
    const [quizEnded, setQuizEnded] = useState(false);
    const [score, setScore] = useState(0);

    function changeScore(number){
        setScore(score+number);
    }

    function endQuiz(){
        setQuizEnded(true);
    }

    return(
        <div className="app">
            {!quizEnded ? (
                <div>
                    <div className="title"><h1>Problem Set</h1></div>
                    <Quiz quizEnded={endQuiz} changeScore={changeScore} currentScore={score}/>
                </div>
            ):(
                <Result score={score}/>
            )}
        </div>
    );
}

export default App;
