package com.jobportal.controller;

import java.io.File;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/upload")
@CrossOrigin("*")
public class FileController {

    @PostMapping
    public String upload(@RequestParam("file") MultipartFile file) throws Exception {

        File dir = new File("uploads");
        if (!dir.exists()) dir.mkdir();

        String path = "uploads/" + file.getOriginalFilename();
        file.transferTo(new File(path));

        return "Uploaded Successfully";
    }
}