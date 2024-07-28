import React, { useState } from "react";
import Result from "./Result";

import { names } from "./App";
import { useContext, createContext } from "react";

const scores = createContext();

function quiz() {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const name = useContext(names);

  {
    console.log(name);
  }

  const next = () => {
    if (mcqs.length === index + 1) {
      setShowResults(true);
      console.log("match");
    }

    {
      console.log("next");
    }
    const currentQuestion = mcqs[index];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setIndex(index + 1);
    setSelectedAnswer(null); // Reset selected answer for the next question

    const allOptions = document.querySelectorAll("li"); // Or: document.querySelectorAll('li')
    allOptions.forEach((option) => {
      option.style.backgroundColor = "white"; // Reset background color
    });
  };

  const mcqs = [
    {
      question: "What is the largest country in the world by land area?",
      options: ["Russia", "Canada", "China", "United States"],
      correctAnswer: 0,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: 0,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Michelangelo",
        "Pablo Picasso",
        "Vincent van Gogh",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: 2,
    },
    {
      question: "Which ocean is the largest?",
      options: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      correctAnswer: 1,
    },
  ];

  const handleRadioChange = (e, num) => {
    {
      const allOptions = document.querySelectorAll("li"); // Or: document.querySelectorAll('li')
      allOptions.forEach((option) => {
        option.style.backgroundColor = "white"; // Reset background color
      });
      setSelectedAnswer(num);

      e.target.style.backgroundColor = "#afabab";
    }
  };

  return (
    <>
      <scores.Provider value={score}>
        <div className="container_quiz">
          {showResults ? (
            <Result />
          ) : (
            <>
              <h1>wlcome {name}</h1>

              <h2>{mcqs[index].question}</h2>
              {/* <form>
       {mcqs[index].options.map((option, i) => (
         <div key={i}>
           
           <input
             type="radio"
             value={option} 
             checked={selectedAnswer === option}
             onChange={handleRadioChange}
           /> 
           
           <label>{option}</label>
           
         </div>
       ))}
     </form>
     */}
              <ul>
                <li
                  onClick={(e) => {
                    handleRadioChange(e, 0);
                  }}
                >
                  {mcqs[index].options[0]}
                </li>
                <li
                  onClick={(e) => {
                    handleRadioChange(e, 1);
                  }}
                >
                  {mcqs[index].options[1]}
                </li>
                <li
                  onClick={(e) => {
                    handleRadioChange(e, 2);
                  }}
                >
                  {mcqs[index].options[2]}
                </li>
                <li
                  onClick={(e) => {
                    handleRadioChange(e, 3);
                  }}
                >
                  {mcqs[index].options[3]}
                </li>
              </ul>
              <button onClick={next}>Next</button>
            </>
          )}
        </div>
      </scores.Provider>
    </>
  );
}

export default quiz;
export { scores };
