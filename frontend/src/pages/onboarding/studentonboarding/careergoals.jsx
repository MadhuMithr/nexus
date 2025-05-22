import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../../styles/careergoals.css"; 

const CareerGoals = () => {
  const navigate = useNavigate();

  const handleClick = (goal) => {
    if (goal === 'Placements') {
      navigate('/placements');
    } else if (goal === 'Higher Studies') {
      navigate('/higher-studies');
    } else if (goal === 'Government Exams') {
      navigate('/govexamsel');
    } else if (goal === 'Entrepreneurship') {
      navigate('/startup');
    }
  };

  return (
    <div className="login-container">
      <h2>Select Your Career Goal</h2>
      <button onClick={() => handleClick('Placements')}>Placements</button>
      <button onClick={() => handleClick('Higher Studies')}>Higher Studies</button>
      <button onClick={() => handleClick('Government Exams')}>Government Exams</button>
      <button onClick={() => handleClick('Entrepreneurship')}>Entrepreneurship</button>
    </div>
  );
};

export default CareerGoals;
