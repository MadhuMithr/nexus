package com.nexus.backend.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "admins")
public class Admin {
    @Id
    private String id;
    private String name;

    @DBRef
    private User user;

    @DBRef
    private List<Student> students = new ArrayList<>();

    
    public Admin() {
    }

    public Admin(String id, String name, User user, List<Student> students) {
        this.id = id;
        this.name = name;
        this.user = user;
        this.students = students;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    // Getters and setters
    
}


