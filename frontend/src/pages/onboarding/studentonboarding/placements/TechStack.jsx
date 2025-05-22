import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../../../styles/placements.css"; 

const techStacks = [
  "React", "Node.js", "Express.js", "MongoDB", "SQL", "Python", "Django", 
  "Java", "Spring Boot", "Angular", "Vue.js", "Ruby on Rails", "PHP", 
  "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "Flutter", 
  "C++", "Swift"
];

const TechStack = () => {
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [otherStack, setOtherStack] = useState('');
  const navigate = useNavigate();

  const toggleStack = (stack) => {
    setSelectedStacks((prev) =>
      prev.includes(stack)
        ? prev.filter((item) => item !== stack)
        : [...prev, stack]
    );
  };

  const handleNext = () => {
    navigate('/preferredcompanies');  
  };

  const handleSkip = () => {
    navigate('/preferredcompanies');
  };

  const handlePrevious = () => {
    navigate('/placements');
  };

  return (
    <div className="techstack-container">
      <h2>Select Your Preferred Tech Stacks</h2>
      <div className="techstack-grid">
        {techStacks.map((stack, index) => (
          <button
            key={index}
            className={`option-button ${selectedStacks.includes(stack) ? 'selected' : ''}`}
            onClick={() => toggleStack(stack)}
          >
            {stack}
          </button>
        ))}
      </div>

      <div className="other-techstack">
        <label htmlFor="otherTechInput">Other (if not listed):</label>
        <input
          type="text"
          id="otherTechInput"
          placeholder="Enter your tech stack"
          value={otherStack}
          onChange={(e) => setOtherStack(e.target.value)}
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

export default TechStack;
