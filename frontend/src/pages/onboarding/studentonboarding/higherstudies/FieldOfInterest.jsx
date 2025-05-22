import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../styles/higherstudies.css";

const academicFields = [
  "Computer Science", "Data Science", "Artificial Intelligence", "Electrical Engineering",
  "Mechanical Engineering", "Civil Engineering", "Biotechnology", "Biomedical Engineering",
  "Physics", "Chemistry", "Mathematics", "Statistics", "Economics", "Finance", "Accounting",
  "Business Administration", "Marketing", "Operations Research", "Supply Chain Management",
  "Psychology", "Sociology", "Anthropology", "Political Science", "Public Policy", "Law",
  "Environmental Science", "Geology", "Architecture", "Design", "Media Studies", "Linguistics",
  "Education", "History", "Philosophy", "International Relations", "Astronomy", "Robotics",
  "Nanotechnology", "Marine Engineering", "Petroleum Engineering", "Aerospace Engineering",
  "Materials Science", "AgriTech", "Veterinary Science", "Pharmacy", "Nursing", "Public Health",
  "Journalism", "Library Science", "Cybersecurity", "Cloud Computing", "Game Development"
];

const FieldOfInterest = () => {
  const [selectedField, setSelectedField] = useState("");
  const [otherInterest, setOtherInterest] = useState("");
  const navigate = useNavigate();

  const handlePrevious = () => navigate(-1);
  const handleSkip = () => navigate("/studydestination");   // or wherever you want to skip next
  const handleNext = () => navigate("/studydestination");   // update path as needed

  return (
    <div className="field-container">
      <h2>Select Your Field of Interest</h2>

      <select
        className="field-dropdown"
        value={selectedField}
        onChange={(e) => setSelectedField(e.target.value)}
      >
        <option value="">-- Select a field --</option>
        {academicFields.map((field, idx) => (
          <option key={idx} value={field}>
            {field}
          </option>
        ))}
      </select>

      <div className="other-field">
        <label htmlFor="otherInterest">Other (if not listed):</label>
        <input
          type="text"
          id="otherInterest"
          placeholder="Enter your interest"
          value={otherInterest}
          onChange={(e) => setOtherInterest(e.target.value)}
        />
      </div>

      <div className="button-container">
        <button className="nav-button previous" onClick={handlePrevious}>
          Previous
        </button>
        <button className="nav-button skip" onClick={handleSkip}>
          Skip
        </button>
        <button className="nav-button next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FieldOfInterest;
