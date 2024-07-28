import React, { createContext, useState } from "react";
import Quiz from "./quiz";

const names = createContext();
const mails = createContext();

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [showQuiz, setShowQuiz] = useState(false);
  // ... rest of your quiz state and logic

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const startQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <>
      <names.Provider value={name}>
        <mails.Provider value={mail}>
          <div>
            {showQuiz ? (
              <Quiz />
            ) : (
              <div className="container">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                />
                <input
                  type="text"
                  placeholder="Enter your mail"
                  value={mail}
                  onChange={handleMailChange}
                />

                <button onClick={startQuiz}>Start Quiz</button>
              </div>
            )}
          </div>
        </mails.Provider>
      </names.Provider>
    </>
  );
}

export default App;
export { names, mails };
