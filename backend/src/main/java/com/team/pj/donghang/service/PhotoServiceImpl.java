package com.team.pj.donghang.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.ObjectMetadata;

import com.team.pj.donghang.domain.dto.UserSchedule;
import com.team.pj.donghang.domain.entity.Photo;
import com.team.pj.donghang.domain.entity.Trip;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.repository.PhotoRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service("awsS3service")
//@Transactional
public class PhotoServiceImpl implements PhotoService{
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3 amazonS3;

    private final AmazonS3Client amazonS3Client;

    private final PhotoRepository photoRepository;


    @Override
    @Transactional
    public String uploadPhoto(UserSchedule user, Trip tripDto, MultipartFile multipartFile)  {
        String s3FileName = UUID.randomUUID() + "-" + multipartFile.getOriginalFilename();

        ObjectMetadata objMeta = new ObjectMetadata();
        objMeta.setContentLength(multipartFile.getSize());
        objMeta.setContentType(multipartFile.getContentType());
        try(InputStream inputStream = multipartFile.getInputStream()) {
//            objMeta.setContentLength(multipartFile.getInputStream().available());
            amazonS3.putObject(bucket, s3FileName, inputStream, objMeta);
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,"파일 업로드에 실패했습니다. ");
        }

//        amazonS3.putObject(bucket, s3FileName, multipartFile.getInputStream(), objMeta);

        //원본 파일 이름과 변경된 이름 저장
        Photo photo = Photo.builder()
                .fileName(s3FileName)
                .trip(tripDto)
                .build();

        photoRepository.save(photo);

        return amazonS3.getUrl(bucket, s3FileName).toString();
    }

//    @Override
//    public String uploadPhoto(MultipartFile multipartFile) {
//        return null;
//    }


    @Override
    public String createFileName(String fileName) {
        return UUID.randomUUID().toString().concat(getFileExtension(fileName));
    }

    @Override
    public String getFileExtension(String fileName) {
        try {
            return fileName.substring(fileName.lastIndexOf("."));
        } catch (StringIndexOutOfBoundsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 형식의 파일(" + fileName + ") 입니다.");
        }
    }

    @Transactional
    @Override
    public String getFilePath(String newFileName) {
        return amazonS3Client.getResourceUrl(bucket, newFileName);
    }

    @Transactional
    @Override
    public void deletePhoto(Trip trip) {
        List<Photo> list = photoRepository.findByTrip(trip);

        list.forEach(file ->{
            photoRepository.delete(file);
        });
    }
}
