function SubmissionForm({handleSubmit, isMultipleChoice, choices, handleChange, disable}){


    const multipleChoices = choices.map((choice, index) => {
        return(
            <div key = {index}>
                <input name="choice" type="radio" value={choice} onClick={handleChange} disabled={disable}/>
                <label>{choice}</label>
            </div>
        );
    });


    return (
        <div className="input-field">
            <form onSubmit={handleSubmit}>
                {isMultipleChoice?(
                    multipleChoices
                ):(
                    <input onChange={handleChange} disabled={disable}></input>
                )}
                <button type="submit" disabled={disable}>Submit</button>
            </form>
        </div>
    );
}

export default SubmissionForm;