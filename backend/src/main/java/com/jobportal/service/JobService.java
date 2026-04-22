package com.jobportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jobportal.entity.Job;
import com.jobportal.repository.JobRepository;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository repo;

    public Job addJob(Job job) {
        return repo.save(job);
    }

    public List<Job> getAllJobs() {
        return repo.findAll();
    }

    public List<Job> searchJobs(String keyword) {
        return repo.findByTitleContainingIgnoreCase(keyword);
    }
}