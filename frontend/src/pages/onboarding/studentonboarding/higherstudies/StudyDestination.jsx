import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../styles/higherstudies.css";

const destinations = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "France", flag: "🇫🇷" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Sweden", flag: "🇸🇪" },
  { name: "Norway", flag: "🇳🇴" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "India", flag: "🇮🇳" },
];

const StudyDestination = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [otherCountry, setOtherCountry] = useState("");
  const navigate = useNavigate();

  const toggleCountry = (name) => {
    setSelectedCountries((prev) =>
      prev.includes(name)
        ? prev.filter((c) => c !== name)
        : [...prev, name]
    );
  };

  const handleNext = () => navigate("/examsplanning"); // change as needed
  const handlePrevious = () => navigate(-1);
  const handleSkip = () => navigate("/examsplanning");

  return (
    <div className="destination-container">
      <h2>Select Your Preferred Study Destinations</h2>
      <div className="carousel">
        {destinations.map(({ name, flag }) => (
          <div
            key={name}
            className={`flag-card ${selectedCountries.includes(name) ? "selected" : ""}`}
            onClick={() => toggleCountry(name)}
          >
            <div className="flag">{flag}</div>
            <div className="country">{name}</div>
          </div>
        ))}
      </div>

      <div className="other-country">
        <label htmlFor="otherInput">Other:</label>
        <input
          id="otherInput"
          type="text"
          placeholder="Enter other country"
          value={otherCountry}
          onChange={(e) => setOtherCountry(e.target.value)}
        />
      </div>

      <div className="button-container">
        <button className="nav-button previous" onClick={handlePrevious}>← Previous</button>
        <button className="nav-button skip" onClick={handleSkip}>Skip</button>
        <button className="nav-button next" onClick={handleNext}>Next →</button>
      </div>
    </div>
  );
};

export default StudyDestination;
