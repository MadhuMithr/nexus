import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../styles/PreparationTimeline.css";

const options = ["6 Months", "1 Year", "2 Years", "Not Decided Yet"];

const PreparationTimeline = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    navigate("/onboardingcomplete"); // change to your actual next page
  };

  const handleSkip = () => {
    navigate("/onboardingcomplete");
  };

  const handleBack = () => {
    navigate("/studymode"); // previous page route
  };

  return (
    <div className="timeline-wrapper">
      <h2>⏳ Preparation Timeline</h2>

      <div className="timeline-options">
        {options.map((option, idx) => (
          <div
            key={idx}
            className={`timeline-card ${selected === option ? "active" : ""}`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <div className="timeline-buttons">
        <button className="btn-back" onClick={handleBack}>⬅️ Back</button>
        <button className="btn-skip" onClick={handleSkip}>Skip</button>
        <button className="btn-next" onClick={handleNext}>Next ➡️</button>
      </div>
    </div>
  );
};

export default PreparationTimeline;
