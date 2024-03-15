
import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import questions from "./assets/questions.json";
import React from "react";

function App() {
  const [allQuestions, setAllQuestions] = React.useState(questions);
  const [qIndex, setQIndex] = React.useState(0);
  const [clickCount, setClickCount] = React.useState(0);
  const [currentQuestionNum, setCurrentQuestionNum] = React.useState(1);

  const q = allQuestions[qIndex];


  const imgSrc = `../img/${q.img}`;

  const onSelectOption = (qimg, op) => {
    const copyQuestions = [...allQuestions];
    const question = copyQuestions.find((q) => q.img === qimg);
    question.selectedOption = op;
    setAllQuestions(copyQuestions);
    setClickCount(prevCount => prevCount + 1); 
  };

  const getOptionStyle = (q, op) => {
    const style = "btn btn-info my-1 ";

    if (op !== q.selectedOption) return style;

    // you are rendering selected option
    if (op === q.right_answer) return style + " bg-success";
    else return style + " bg-danger";
  };

  const calculateScore = () => {
    const correctAnswers = allQuestions.filter((q) => q.selectedOption === q.right_answer);
    return correctAnswers.length;
  };

  const calculatePercentage = () => {
    const attemptedQuestions = allQuestions.filter((q) => q.selectedOption !== undefined);
    return (attemptedQuestions.length / allQuestions.length) * 100;
  };

  const handleNextQuestion = () => {
    setQIndex(Math.floor(Math.random() * allQuestions.length));
    setCurrentQuestionNum(prevNum => prevNum + 1);
  };

  return (
    <div className ="homepage">
      <Header />
      <div className="container my-1">
        <div className="text-center bg-white">
          <h3>Question {currentQuestionNum}/{allQuestions.length}</h3>
          </div>

        <div className="text-center">
          <img src={imgSrc} alt="" height="200px" width="400px" />
        </div>
        <div className="container card text-center my-2 bg-dark text-light">
          <div className="card-header">
            <h3>Select Right option</h3>
          </div>
          <div className="card-body">
            <div className="list-group list-group-flush my-1">
              {q.options.map((op) => (
                <button
                  type="button"
                  key={op}
                  className={getOptionStyle(q, op)}
                  onClick={() => onSelectOption(q.img, op)}
                >
                  {op}
                </button>
              ))}
            </div>
          </div>
          <div className="card-footer text-body-secondary">
                <button
              className="btn btn-danger"
              onClick={handleNextQuestion}
            >
              Next
            </button>
            <div className="d-flex justify-content-around text-light">
            <h4 >Total Clicks: {clickCount}</h4>
            <h4>Percentage Attempted: {calculatePercentage().toFixed(2)}%</h4>
            <h4>Your Score: {calculateScore()}</h4>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;