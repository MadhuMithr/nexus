import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../styles/GovExamSelection.css";

const examOptions = [
  "UPSC", "SSC CGL", "SSC CHSL", "RRB", "IBPS PO", "IBPS Clerk",
  "SBI PO", "SBI Clerk", "State PSC", "NDA/CDS/AFCAT", "CAPF"
];

const GovExamSelection = () => {
  const [selectedExams, setSelectedExams] = useState([]);
  const [otherExam, setOtherExam] = useState('');
  const navigate = useNavigate();

  const handleToggle = (exam) => {
    setSelectedExams((prev) =>
      prev.includes(exam)
        ? prev.filter((e) => e !== exam)
        : [...prev, exam]
    );
  };

  const handleNext = () => {
    // You can store selectedExams/otherExam in context or localStorage if needed
    navigate("/studymode"); // update this to your next route
  };

  const handleSkip = () => {
    navigate("/studymode"); // skipping goes to same next page
  };

  const handleBack = () => {
    navigate("/careergoals"); // change this to your actual previous route
  };

  return (
    <div className="govexam-wrapper">
      <h2>📝 Government Exams You're Preparing For</h2>

      <div className="card-grid">
        {examOptions.map((exam, index) => (
          <div
            key={index}
            className={`exam-card ${selectedExams.includes(exam) ? "active" : ""}`}
            onClick={() => handleToggle(exam)}
          >
            {exam}
          </div>
        ))}
      </div>

      <div className="other-input">
        <label>Other:</label>
        <input
          type="text"
          placeholder="Enter other exam name"
          value={otherExam}
          onChange={(e) => setOtherExam(e.target.value)}
        />
      </div>

      <div className="btn-container">
        <button className="btn-back" onClick={handleBack}>⬅️ Back</button>
        <button className="btn-skip" onClick={handleSkip}>Skip</button>
        <button className="btn-next" onClick={handleNext}>Next ➡️</button>
      </div>
    </div>
  );
};

export default GovExamSelection;
