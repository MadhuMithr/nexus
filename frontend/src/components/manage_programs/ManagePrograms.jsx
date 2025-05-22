import React from 'react';
import './ManagePrograms.css';
const ManagePrograms = () => {
  return (
    <div className="manage-programs">
      <div className="sidebar">
        <h3>Dashboard</h3>
        <h3>My Programs</h3>
        <h3>Student Request</h3>
        <h3>Post Updates</h3>
        <h3>Mentee Feedbacks</h3>
        <h3>Logout</h3>
      </div>
      
      <div className="main-content">
        <h1>Career Guidance Batch #4 - Ongoing</h1>
        <p>May 10 2025 - June 12 2025</p>
        <p>Description:</p>
        <p>asjodfjiosoidf... (truncated for brevity)</p>
        
        <div className="buttons">
          <button className="new-session">+ New Session</button>
          <button className="create-group-chat">+ Create Group-Chat</button>
        </div>

        <div className="student-info">
          <h3>Assigned Students</h3>
          <div className="student">
            <h4>Swetha K S</h4>
            <p>CSE - 1st Yr</p>
            <p>Description: Experience in Springboot, Java and interested to learn and engage with industry experts...</p>
            <button className="remove">Remove</button>
            <button className="message">Message</button>
          </div>
        </div>

        <div className="tabs">
          <button>Sessions</button>
          <button>Shared Materials</button>
          <button>Student Feedbacks</button>
        </div>
      </div>
    </div>
  );
}

export default ManagePrograms;
