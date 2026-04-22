package com.jobportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.jobportal.entity.Job;
import com.jobportal.service.JobService;

import java.util.List;

@RestController
@RequestMapping("/jobs")
@CrossOrigin("*")
public class JobController {

    @Autowired
    private JobService service;

    @PostMapping
    public Job addJob(@RequestBody Job job) {
        return service.addJob(job);
    }

    @GetMapping
    public List<Job> getJobs() {
        return service.getAllJobs();
    }

    @GetMapping("/search")
    public List<Job> search(@RequestParam String keyword) {
        return service.searchJobs(keyword);
    }
}