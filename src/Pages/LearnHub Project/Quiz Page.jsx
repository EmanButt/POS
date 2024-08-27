import React, { useState } from "react";

import QuizData from '../LearnHub Project/Questions.jsx';
import './Quiz Page.css'

const Quiz_page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);

  const next_question = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      // Logic when all questions are completed (if any)
    }
  };

  const previous_question = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const updateScore=()=>{
    if(clickedOption===QuizData[currentQuestion].answer){
        setScore(score+1);
    }
  }

  return (
    <>
     

      <div className="container">
         

        <div className="questions_container">
          <span id="question-number">{currentQuestion + 1}. </span>
          <span id="question-txt">{QuizData[currentQuestion].question} </span>
        </div>

        <div className="option_container">
          {QuizData[currentQuestion].options.map((option, i) => {
            return (
              <button
                key={i}  // Added a key for each button to prevent React key warning
                className={`option-btn
                    ${clickedOption ==i+1? "checked":null}`
                }
                onClick={() => setClickedOption(i + 1)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      
      <div>
      <input
          type="button"
          value="Previous"
          id="previous-button"
          onClick={previous_question}
        />
        <input
          type="button"
          value="Next"
          id="next-button"
          onClick={next_question}
        />
      </div>
    
    </>
  );
};

export default Quiz_page;
