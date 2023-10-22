import {questions} from "../question_data/data.js";
import Question from "./Question";
import {useState} from "react";
import SubmissionForm from "./SubmissionForm";
import Solution from "./Solution";
function Quiz({quizEnded, changeScore, currentScore}) {
    const [currentQuestion ,setCurrentQuestion] = useState(1);
    const totalQuestionNumber = questions.length;
    const isMultipleChoice = questions[currentQuestion-1].isMultipleChoice;
    const choices = isMultipleChoice? questions[currentQuestion-1].choices: [];
    const [userAnswer, setUserAnswer] = useState();
    const [showAnswer, setShowAnswer] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [ended, setEnded] = useState(false);

    function nextQuestion(){
        setUserAnswer(null);
        setShowAnswer(false);
        setIsAnswerCorrect(false);

        if(currentQuestion===totalQuestionNumber){
            quizEnded();
        }else{
            setCurrentQuestion(currentQuestion+1);
        }
    }
    function handleAnswerChange(e){
        setUserAnswer(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        e.target.reset();
        setShowAnswer(true);
        if(userAnswer === questions[currentQuestion-1].answer){
            setIsAnswerCorrect(true);
            changeScore(1);
        }else{
            setIsAnswerCorrect(false);
        }
    }

    return (

        <div className="quiz">
            <div className="header">
                <h2 className="question-number">Question {currentQuestion}</h2>
                <h2 className="score">Score: {currentScore}</h2>
            </div>

            <Question question={questions[currentQuestion-1].questionStatement}/>
            <SubmissionForm handleSubmit={handleSubmit} isMultipleChoice={isMultipleChoice} choices={choices} handleChange={handleAnswerChange} disable={showAnswer}/>
            {showAnswer && (
                <div>
                    <h2>{isAnswerCorrect? "Correct!": "Wrong, Bozo! Pay ATTENTION in Class"}</h2>
                    <div>
                        <Solution solution={questions[currentQuestion-1].solution}/>
                    </div>
                    <button onClick={nextQuestion}>Next Problem</button>
                </div>
            )}
        </div>
    );
}

export default Quiz;