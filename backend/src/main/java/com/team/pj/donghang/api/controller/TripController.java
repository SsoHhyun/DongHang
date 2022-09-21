package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.api.request.TripCreateRequestDto;
import com.team.pj.donghang.service.TripService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

@Api(value = "일정 생성과 관련된 API" ,tags = {"schedule,plan"})
@RestController("api/schedules")
@CrossOrigin("*")
@Controller
public class TripController {
    private final Logger log = LoggerFactory.getLogger(TripController.class);
    private TripService tripService;

    @PostMapping
    @ApiOperation(value = "")
    @ApiResponses({

    })
    public ResponseEntity tripScheduleCreate(
            @ApiIgnore Authentication authentication,
            @ApiParam(value = "") @RequestPart(required = false) List<MultipartFile> multipartFileList,
            @ApiParam(value = "") @RequestPart(required = true)  TripCreateRequestDto tripCreateRequestDto){
//        User user = new User
//        tripService.createTrip(tripCreateRequestDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
