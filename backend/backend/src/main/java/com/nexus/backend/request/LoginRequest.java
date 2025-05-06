package com.nexus.backend.request;

public class LoginRequest {
    private String collegeId;
    private String emailId;
    private String password;
    
    public LoginRequest(String collegeId, String emailId, String password) {
        this.collegeId = collegeId;
        this.emailId = emailId;
        this.password = password;
    }
    public String getCollegeId() {
        return collegeId;
    }
    public void setCollegeId(String collegeId) {
        this.collegeId = collegeId;
    }
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

   
}