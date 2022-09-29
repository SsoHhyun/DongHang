package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.domain.entity.CustomUserDetails;
import com.team.pj.donghang.domain.entity.Trip;
import com.team.pj.donghang.service.PhotoService;
import com.team.pj.donghang.service.TripService;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;
@Api(value = "사진 업로드와 관련된 API  Auth 필수" ,tags = {"photo : auth 필"})
@RestController("upload")
@Controller
@CrossOrigin("*")
@RequestMapping("/upload")
public class PhotoController {
    private final Logger log = LoggerFactory.getLogger(PhotoController.class);
    @Autowired
    PhotoService photoService;
    @Autowired
    TripService tripService;

    @PostMapping("/trip")
    @ApiOperation(value = "일정(미션) 사진 1개 업로드하기")
    @ApiResponses({
            @ApiResponse(code = 201,message = "사진이 성공적으로 업로드 되었습니다.")
    })
    public ResponseEntity uploadTripPhoto(
            @ApiIgnore Authentication authentication,
            @RequestParam("images")MultipartFile multipartFile,
            @RequestParam("tripNo")Long tripNo
            ){
        CustomUserDetails userDetails = (CustomUserDetails)authentication.getDetails();

        Trip trip=tripService.getTripInfo(tripNo);

        String result =photoService.uploadTripPhoto(userDetails.getUser(),trip,multipartFile);

        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/userProfile")
    @ApiOperation(value = "프로필 사진 업로드하기")
    @ApiResponses({
            @ApiResponse(code = 201,message = "프로필 사진이 성공적으로 업로드 되었습니다.")
    })
    public ResponseEntity uploadProfileImage(
            @ApiIgnore Authentication authentication,
            @RequestParam("profileImage")MultipartFile multipartFile
    ){
        CustomUserDetails userDetails = (CustomUserDetails)authentication.getDetails();
        String result = photoService.createProfileImage(userDetails.getUser(),multipartFile);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/userProfile")
    @ApiOperation(value = "프로필 이미지 수정하기")
    @ApiResponses({
            @ApiResponse(code = 201,message = "사진이 성공적으로 수정 되었습니다.")
    })
    public ResponseEntity updateProfileImage(
            @ApiIgnore Authentication authentication,
            @RequestParam("profileImage")MultipartFile multipartFile
    ){
        CustomUserDetails userDetails = (CustomUserDetails)authentication.getDetails();

        String result = photoService.updateProfileImg(userDetails.getUser(),multipartFile);
        return new ResponseEntity(HttpStatus.OK);
    }

    /**
     * uploadUdateTripPhoto 는 일정에 업로드된 사진이 수정되는지 몰라서 0926일자로 주석
     * */
//    @PutMapping("/trip")
//    @ApiOperation(value = "사진 1개 업로드하기")
//    @ApiResponses({
//            @ApiResponse(code = 201,message = "사진이 성공적으로 업로드 되었습니다.")
//    })
//    public ResponseEntity uploadUdateTripPhoto(
//            @ApiIgnore Authentication authentication,
//            @RequestParam("images")MultipartFile multipartFile,
//            @RequestParam("tripNo")Long tripNo
//    ){
//        //user는 추후 수정
//        UserSchedule user = new UserSchedule(1L);
//        Trip trip=tripService.getTripInfo(tripNo);
//
//        String result =photoService.uploadPhoto(user,trip,multipartFile);
//
//        return new ResponseEntity(HttpStatus.OK);
//    }


    @GetMapping("/getTripPhotoList")
    @ApiOperation(value = "여행기록 사진 리스트 가져오기")
    @ApiResponses({
            @ApiResponse(code = 201,message = "사진들이 성공적으로 반환 되었습니다."),
            @ApiResponse(code = 400,message = "사진 정보들이 없습니다.")
    })
    public ResponseEntity<List<String>> getPhotoList(
            @ApiIgnore Authentication authentication,
            @ApiParam(value = "여행기록 사진들 가져오기",required = true) @RequestParam(value = "tripNo", required = true)Long tripNo
    ){
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();

        Trip trip = tripService.getTripInfo(tripNo);
        List<String> photoUrlList=photoService.getImageUrlList(trip);
        if(photoUrlList==null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {

            return ResponseEntity.status(201).body(photoUrlList);
        }
        
    }
}
