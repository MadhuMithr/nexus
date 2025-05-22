import React, { useState } from "react";
import "../../../../styles/SupportNeeded.css";

const supportOptions = [
  "Mentorship", 
  "Funding", 
  "Team Building", 
  "Market Research", 
  "Legal & IP Guidance", 
  "Technical Support"
];

const SupportNeeded = () => {
  const [selectedSupports, setSelectedSupports] = useState([]);
  const [otherSupport, setOtherSupport] = useState('');

  const handleToggle = (support) => {
    setSelectedSupports((prev) =>
      prev.includes(support)
        ? prev.filter((s) => s !== support)
        : [...prev, support]
    );
  };

  return (
    <div className="support-needed-container">
      <h2>🚀 What Kind of Support Do You Need?</h2>
      
      <div className="support-options">
        {supportOptions.map((support, index) => (
          <div
            key={index}
            className={`support-option ${selectedSupports.includes(support) ? "active" : ""}`}
            onClick={() => handleToggle(support)}
          >
            {support}
          </div>
        ))}
      </div>

      <div className="other-input">
        <label>Other:</label>
        <input
          type="text"
          placeholder="Enter other support you need"
          value={otherSupport}
          onChange={(e) => setOtherSupport(e.target.value)}
        />
      </div>

      <div className="btn-container">
        <button className="btn-back">⬅️ Back</button>
        <button className="btn-skip">Skip</button>
        <button className="btn-next">Next ➡️</button>
      </div>
    </div>
  );
};

export default SupportNeeded;
