import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../styles/Startup.css";

const StartupIdea = () => {
  const [hasIdea, setHasIdea] = useState(null);
  const [ideaDescription, setIdeaDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div className="startup-idea-container">
      <h2>💡 Do you have a startup idea?</h2>

      <div className="toggle-buttons">
        <button
          className={`toggle-btn ${hasIdea === true ? "selected" : ""}`}
          onClick={() => setHasIdea(true)}
        >
          Yes
        </button>
        <button
          className={`toggle-btn ${hasIdea === false ? "selected" : ""}`}
          onClick={() => setHasIdea(false)}
        >
          No
        </button>
      </div>

      {hasIdea === true && (
        <div className="idea-input">
          <label htmlFor="ideaText">Briefly describe your idea:</label>
          <textarea
            id="ideaText"
            placeholder="Describe your startup idea here..."
            value={ideaDescription}
            onChange={(e) => setIdeaDescription(e.target.value)}
            rows={5}
          />
        </div>
      )}

      <div className="btn-container">
        <button className="btn-back" onClick={() => navigate("/studymode")}>⬅️ Back</button>
        <button className="btn-skip" onClick={() => navigate("/alldone")}>Skip</button>
        <button className="btn-next" onClick={() => navigate("/alldone")}>Next ➡️</button>
      </div>
    </div>
  );
};

export default StartupIdea;
