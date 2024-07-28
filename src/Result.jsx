import React from "react";
import { names, mails } from "./App";
import { scores } from "./quiz";
import { useContext } from "react";

function Result() {
  const name1 = useContext(names);
  const mail1 = useContext(mails);
  const score = useContext(scores);

  return (
    <>
      <div className="result-container">
        <div className="result">
          <div className="result-icon"></div>
          {score > 2 ? (
            <>
              <img src="./src/assets/cc.png" alt="Image description" />
              <div className="result-text">Congratulations!</div>
            </>
          ) : (
            <>
              <img src="./src/assets/ww.png" alt="Image description" />
              <div className="result-text">Not Satisfactory! {name1}</div>
            </>
          )}

          <div className="score">
            Score:{score} <span id="score-value"></span>
            {name1}
          </div>
          <div className="points">Percent:{(score * 100) / 5}</div>
          <p>Send this Result on {mail1}</p>
          <button>send</button>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}

export default Result;
