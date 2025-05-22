import React, { useState } from "react";
import "../../../../styles/placements.css";
import { useNavigate } from "react-router-dom";

const companies = [
  "Google", "Microsoft", "Amazon", "Facebook", "Apple",
  "Netflix", "Adobe", "Intel", "IBM", "Oracle",
  "Salesforce", "Infosys", "TCS", "Wipro", "Cognizant",
  "Capgemini", "Accenture", "Zoho", "HCL", "PayPal"
];

const PreferredCompanies = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [otherCompany, setOtherCompany] = useState('');
  const navigate = useNavigate();

  const toggleCompany = (company) => {
    setSelectedCompanies((prev) =>
      prev.includes(company)
        ? prev.filter((item) => item !== company)
        : [...prev, company]
    );
  };

  return (
    <div className="companies-container">
      <h2>Select Your Preferred Companies</h2>
      <div className="companies-grid">
        {companies.map((company, index) => (
          <button
            key={index}
            className={`option-button ${selectedCompanies.includes(company) ? 'selected' : ''}`}
            onClick={() => toggleCompany(company)}
          >
            {company}
          </button>
        ))}
      </div>

      <div className="other-company">
        <label htmlFor="otherCompanyInput">Other (if not listed):</label>
        <input
          type="text"
          id="otherCompanyInput"
          placeholder="Enter company name"
          value={otherCompany}
          onChange={(e) => setOtherCompany(e.target.value)}
        />
      </div>

      <div className="button-container">
        <button className="nav-button" onClick={() => navigate("/techstack")}>Previous</button>
        <button className="nav-button" onClick={() => navigate("/onboardingcomplete")}>Skip</button>
        <button className="nav-button" onClick={() => navigate("/onboardingcomplete")}>Next</button>
      </div>
    </div>
  );
};

export default PreferredCompanies;
