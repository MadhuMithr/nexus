import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../styles/higherstudies.css";

const exams = [
  { name: "GRE", icon: "📊" },
  { name: "TOEFL", icon: "🗣️" },
  { name: "IELTS", icon: "✍️" },
  { name: "GMAT", icon: "📈" },
  { name: "GATE", icon: "⚙️" },
  { name: "CAT", icon: "🎯" }
];

const ExamsPlanning = () => {
  const [selectedExams, setSelectedExams] = useState([]);
  const [sopAssistance, setSopAssistance] = useState(false);
  const navigate = useNavigate();

  const toggleExam = (examName) => {
    setSelectedExams((prev) =>
      prev.includes(examName)
        ? prev.filter((e) => e !== examName)
        : [...prev, examName]
    );
  };

  const handleNext = () => navigate("/plannedyear");
  const handlePrevious = () => navigate(-1);
  const handleSkip = () => navigate("/plannedyear");

  return (
    <div className="exams-container">
      <h2>Exams You're Planning to Take</h2>
      <div className="exam-grid">
        {exams.map(({ name, icon }) => (
          <div
            key={name}
            className={`exam-card ${selectedExams.includes(name) ? "selected" : ""}`}
            onClick={() => toggleExam(name)}
          >
            <span className="exam-icon">{icon}</span>
            <span className="exam-name">{name}</span>
          </div>
        ))}
      </div>

      <div className="sop-card" onClick={() => setSopAssistance(!sopAssistance)}>
        <input type="checkbox" checked={sopAssistance} readOnly />
        <label>SOP/LOI Assistance</label>
      </div>

      <div className="button-container">
        <button className="nav-button previous" onClick={handlePrevious}>← Previous</button>
        <button className="nav-button skip" onClick={handleSkip}>Skip</button>
        <button className="nav-button next" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
};

export default ExamsPlanning;
