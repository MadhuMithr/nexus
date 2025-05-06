package com.nexus.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "profiles")
public class Profile {
    @Id
    private String id;
    private String experience;
    private String education;
    private List<String> interestedDomains;
    private String honours;
    private double cgpa;
    private List<String> projects;
    private List<String> achievements;
    
    public Profile(String id, String experience, String education, List<String> interestedDomains, String honours,
            double cgpa, List<String> projects, List<String> achievements) {
        this.id = id;
        this.experience = experience;
        this.education = education;
        this.interestedDomains = interestedDomains;
        this.honours = honours;
        this.cgpa = cgpa;
        this.projects = projects;
        this.achievements = achievements;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getExperience() {
        return experience;
    }
    public void setExperience(String experience) {
        this.experience = experience;
    }
    public String getEducation() {
        return education;
    }
    public void setEducation(String education) {
        this.education = education;
    }
    public List<String> getInterestedDomains() {
        return interestedDomains;
    }
    public void setInterestedDomains(List<String> interestedDomains) {
        this.interestedDomains = interestedDomains;
    }
    public String getHonours() {
        return honours;
    }
    public void setHonours(String honours) {
        this.honours = honours;
    }
    public double getCgpa() {
        return cgpa;
    }
    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }
    public List<String> getProjects() {
        return projects;
    }
    public void setProjects(List<String> projects) {
        this.projects = projects;
    }
    public List<String> getAchievements() {
        return achievements;
    }
    public void setAchievements(List<String> achievements) {
        this.achievements = achievements;
    }

    
}