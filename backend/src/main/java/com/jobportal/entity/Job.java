package com.jobportal.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Job {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String company;
    private String location;
    private String description;
}