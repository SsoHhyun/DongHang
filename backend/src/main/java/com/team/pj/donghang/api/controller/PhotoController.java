package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.api.response.TripResponseDto;
import com.team.pj.donghang.domain.dto.UserSchedule;
import com.team.pj.donghang.domain.entity.Trip;
import com.team.pj.donghang.service.PhotoService;
import com.team.pj.donghang.service.TripService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

@RestController("upload")
@Controller
@CrossOrigin("*")
@RequestMapping("/upload")
public class PhotoController {

    @Autowired
    PhotoService photoService;
    @Autowired
    TripService tripService;

    @PostMapping()
    @ApiOperation(value = "사진 업로드하기")
    @ApiResponses({

    })
    public ResponseEntity uploadPhoto(
//            @ApiIgnore String accessToken,
            @RequestParam("images")MultipartFile multipartFile
            ){
        UserSchedule user = new UserSchedule(1L);
        TripResponseDto t =tripService.getUserTrip(1L,7L);
        Trip trip = Trip.builder()
                .tripNo(t.getTripNo())
                .endDate(t.getEndDate())
                .startDate(t.getStartDate())
                .tripName(t.getTripName())
                .build();
        String result =photoService.uploadPhoto(user,trip,multipartFile);

        return new ResponseEntity(HttpStatus.OK);
    }

//    public ResponseEntity
}
