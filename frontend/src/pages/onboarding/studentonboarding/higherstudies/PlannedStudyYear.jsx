import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../styles/higherstudies.css";

const PlannedStudyYear = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const navigate = useNavigate();

  const years = ["2025", "2026", "2027", "2028", "Not decided yet"];

  return (
    <div className="study-year-container">
      <h2>🎓 Planned Year of Study Abroad / Admission</h2>
      <select
        className="study-year-dropdown"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="" disabled>
          -- Select Year --
        </option>
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>

      <div className="navigation-buttons">
        <button className="nav-button prev" onClick={() => navigate('/exam-planning')}>
          ⬅ Previous
        </button>
        <div className="right-buttons">
          <button className="nav-button skip" onClick={() => navigate('/onboardingcomplete')}>
            Skip
          </button>
          <button className="nav-button next" onClick={() => navigate('/onboardingcomplete')}>
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlannedStudyYear;
