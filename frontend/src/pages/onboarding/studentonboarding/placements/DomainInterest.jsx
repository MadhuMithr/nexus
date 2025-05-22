import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../../../styles/placements.css";

const domains = [
  "Artificial Intelligence", "Machine Learning", "Data Science", "Web Development",
  "Mobile App Development", "Cybersecurity", "Cloud Computing", "Blockchain",
  "Internet of Things", "DevOps", "Game Development", "UI/UX Design",
  "AR/VR", "Embedded Systems", "Big Data", "Digital Marketing",
  "Networking", "Software Testing", "Robotics", "Computer Vision"
];

const DomainInterest = () => {
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [otherDomain, setOtherDomain] = useState('');
  const navigate = useNavigate();

  const toggleDomain = (domain) => {
    setSelectedDomains(prev =>
      prev.includes(domain)
        ? prev.filter(item => item !== domain)
        : [...prev, domain]
    );
  };

  const handleNext = () => {
    navigate('/techstack');
  };

  const handleSkip = () => {
    navigate('/techstack');
  };

  const handlePrevious = () => {
    navigate('/');
  };

  return (
    <div className="domain-container">
      <h2>Select Your Domain Interests</h2>
      <div className="domain-grid">
        {domains.map((domain, index) => (
          <button
            key={index}
            className={`option-button ${selectedDomains.includes(domain) ? 'selected' : ''}`}
            onClick={() => toggleDomain(domain)}
          >
            {domain}
          </button>
        ))}
      </div>

      <div className="other-domain">
        <label htmlFor="otherInput">Other (if not listed):</label>
        <input
          type="text"
          id="otherInput"
          placeholder="Enter your domain"
          value={otherDomain}
          onChange={(e) => setOtherDomain(e.target.value)}
        />
      </div>

      <div className="button-container">
        <button className="nav-button" onClick={handlePrevious}>Previous</button>
        <button className="nav-button" onClick={handleSkip}>Skip</button>
        <button className="nav-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default DomainInterest;
