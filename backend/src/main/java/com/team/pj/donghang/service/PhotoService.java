package com.team.pj.donghang.service;

import com.team.pj.donghang.domain.dto.UserSchedule;
import com.team.pj.donghang.domain.entity.Trip;
import com.team.pj.donghang.domain.entity.User;
import org.springframework.web.multipart.MultipartFile;

public interface PhotoService {
    public String uploadPhoto(UserSchedule user, Trip tripDto, MultipartFile multipartFile);

    String createFileName(String fileName);

    String getFileExtension(String fileName);

//    String getThumbnailPath(User user);

    String getFilePath(String newFileName);

    void deletePhoto(Trip trip);
}
