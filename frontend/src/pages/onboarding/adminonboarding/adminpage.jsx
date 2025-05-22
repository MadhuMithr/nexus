import React, { useState } from 'react';
import "../../../styles/Startup.css";

const AdminOnboarding = () => {
  const [formData, setFormData] = useState({
    collegeName: '',
    collegeId: '',
    location: '',
    designation: '',
    email: '',
    phone: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
    // You can integrate this with your backend here
  };

  return (
    <div className="admin-onboarding-container">
      <h2>Admin Onboarding</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-section">
          <label>College Name</label>
          <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>College ID</label>
          <input type="text" name="collegeId" value={formData.collegeId} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Designation</label>
          <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Upload Student Data (CSV or Excel)</label>
          <input type="file" name="file" accept=".csv, .xls, .xlsx" onChange={handleChange} />
        </div>

        <div className="form-section">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-section">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminOnboarding;
