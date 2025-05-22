import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../styles/StudyMode.css";

const studyModes = ["Online", "Offline", "Both"];

const StudyMode = () => {
  const [selectedMode, setSelectedMode] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/preparationtime"); // ✅ route to next page
  };

  const handleSkip = () => {
    navigate("/preparationtime"); // ✅ same route even if skipped
  };

  const handleBack = () => {
    navigate("/govexam"); // ✅ route to previous page
  };

  return (
    <div className="study-mode-container">
      <h2>🎓 Preferred Study Mode</h2>
      <div className="mode-options">
        {studyModes.map((mode, index) => (
          <button
            key={index}
            className={`mode-button ${selectedMode === mode ? "selected" : ""}`}
            onClick={() => setSelectedMode(mode)}
          >
            {mode}
          </button>
        ))}
      </div>

      <div className="btn-container">
        <button className="btn-back" onClick={handleBack}>⬅️ Back</button>
        <button className="btn-skip" onClick={handleSkip}>Skip</button>
        <button className="btn-next" onClick={handleNext}>Next ➡️</button>
      </div>
    </div>
  );
};

export default StudyMode;
