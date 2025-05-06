package com.nexus.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String id; 
    private String collegeId; // generateCollegeId() func needed
    private String emailId;
    private String password; // generatePassword() func needed
    private String role; // e.g., "ADMIN" or "STUDENT"
    
    public User() {
    }
    public User(String id, String collegeId, String emailId, String password, String role) {
        this.id = id;
        this.collegeId = collegeId;
        this.emailId = emailId;
        this.password = password;
        this.role = role;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
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
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }

    
}

