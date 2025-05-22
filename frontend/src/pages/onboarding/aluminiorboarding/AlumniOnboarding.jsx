import React, { useState } from 'react';
import './AlumniOnboarding.css';

const AlumniOnboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    sector: '',
    jobRole: '',
    jobTips: '',
    focusYears: [],
    mentorshipAvailability: '',
    techStacks: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (year) => {
    setFormData((prev) => {
      const focusYears = prev.focusYears.includes(year)
        ? prev.focusYears.filter(y => y !== year)
        : [...prev.focusYears, year];
      return { ...prev, focusYears };
    });
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Alumni onboarding completed!');
  };

  return (
    <div className="alumni-form-container">
      <h2>Alumni Onboarding</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <label>Sector you're working in:</label>
            <input type="text" name="sector" value={formData.sector} onChange={handleChange} />

            <label>Your job role:</label>
            <input type="text" name="jobRole" value={formData.jobRole} onChange={handleChange} />

            <label>Job-related tips for students:</label>
            <textarea name="jobTips" value={formData.jobTips} onChange={handleChange} />
          </>
        )}

        {step === 2 && (
          <>
            <label>Which year students do you want to mentor?</label>
            <div className="checkbox-group">
              {[1, 2, 3, 4].map((year) => (
                <label key={year}>
                  <input
                    type="checkbox"
                    checked={formData.focusYears.includes(year)}
                    onChange={() => handleCheckboxChange(year)}
                  />
                  {year} Year
                </label>
              ))}
            </div>

            <label>Availability for mentorship/sessions:</label>
            <select name="mentorshipAvailability" value={formData.mentorshipAvailability} onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Monthly">Monthly</option>
            </select>
          </>
        )}

        {step === 3 && (
          <>
            <label>Tech stacks you're working with (if IT):</label>
            <input type="text" name="techStacks" value={formData.techStacks} onChange={handleChange} />

            <label>Other useful information for students:</label>
            <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
          </>
        )}

        <div className="button-group">
          {step > 1 && <button type="button" onClick={handleBack}>Back</button>}
          {step < 3 && <button type="button" onClick={handleNext}>Next</button>}
          {step === 3 && <button type="submit" className="submit-button">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default AlumniOnboarding;