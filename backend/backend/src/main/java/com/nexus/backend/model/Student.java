package com.nexus.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

// --- Student.java ---
@Document(collection = "students")
public class Student {
    @Id
    private String id;
    private String name;
    private boolean isAlumni;

    @DBRef
    private User user;

    @DBRef
    private Admin admin;

    @DBRef
    private Profile profile;

    
    public Student(String id, String name, boolean isAlumni, User user, Admin admin, Profile profile) {
        this.id = id;
        this.name = name;
        this.isAlumni = isAlumni;
        this.user = user;
        this.admin = admin;
        this.profile = profile;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isAlumni() {
        return isAlumni;
    }

    public void setAlumni(boolean isAlumni) {
        this.isAlumni = isAlumni;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public Profile getProfile() {
        return profile;
    }

    public void setProfile(Profile profile) {
        this.profile = profile;
    }

    
}