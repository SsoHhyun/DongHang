package com.team.pj.donghang.service;

import org.springframework.web.multipart.MultipartFile;

public interface PhotoService {
    public void uploadPhoto(MultipartFile multipartFile);
}
