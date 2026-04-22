package com.jobportal.entity;

import jakarta.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String password;

    private String resumePath;

    // ===== GETTERS =====
    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Long getId() {
        return id;
    }

    public String getResumePath() {
        return resumePath;
    }

    // ===== SETTERS =====
    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setResumePath(String resumePath) {
        this.resumePath = resumePath;
    }

    public void setId(Long id) {
        this.id = id;
    }
}