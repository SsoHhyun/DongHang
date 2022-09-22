package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.api.request.TripCreateRequestDto;
import com.team.pj.donghang.api.response.TripResponseDto;
import com.team.pj.donghang.domain.dto.PlaceCommonDto;
import com.team.pj.donghang.domain.dto.UserSchedule;
import com.team.pj.donghang.domain.entity.PlaceCommon;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.service.TripService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
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

import java.util.Arrays;
import java.util.List;

@Api(value = "일정 생성과 관련된 API" ,tags = {"schedule,plan"})
@RestController("api/schedules")
@CrossOrigin("*")
@Controller
@RequestMapping("/api/trip")
//@RequiredArgsConstructor
public class TripController {
    private final Logger log = LoggerFactory.getLogger(TripController.class);
    @Autowired
    TripService tripService;

    @PostMapping
    @ApiOperation(value = "일정 생성")
    @ApiResponses({

    })
    public ResponseEntity tripScheduleCreate(
            @ApiIgnore Authentication authentication,
            @ApiParam(value = "일정 생성을 위한 정보",required = true) @RequestBody TripCreateRequestDto tripCreateRequestDto
            ) {
        UserSchedule user = new UserSchedule(1L);
        tripService.createTrip(user, tripCreateRequestDto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/recommendList")
    @ApiOperation(value = "추천 일정 리스트")
    @ApiResponses({

    })
    public ResponseEntity<List<PlaceCommon>> getRecommendList(@ApiIgnore Authentication authentication,
                                                              @ApiParam(value = "일정 생성을 위한 정보",required = true)Long[] commonNoList){
        List<Long> temp =Arrays.asList(commonNoList);
       return ResponseEntity.status(200).body(tripService.recommendPlaceList(temp));
    }
    @GetMapping("/getMyTripList")
    @ApiOperation(value = "내 일정 리스트")
    @ApiResponses({

    })
    public ResponseEntity<List<TripResponseDto>> getTripList(@ApiIgnore Authentication authentication,
                                                             @ApiParam(value = "일정 정보들을 가져오기 위한 userno",required = true)Long userNo){
        List<TripResponseDto> list = tripService.getUserTripList(userNo);
        return ResponseEntity.status(200).body(list);
    }
    @GetMapping("/getMyTrip")
    @ApiOperation(value = "내 일정 리스트")
    @ApiResponses({

    })
    public ResponseEntity<TripResponseDto> getTripList(@ApiIgnore Authentication authentication,
                                                             @ApiParam(value = "일정 정보들을 가져오기 위한 userno",required = true)Long userNo,
                                                             @ApiParam(value = "내 일정 정보 1개",required = true)Long tripNo){
        TripResponseDto result = tripService.getUserTrip(userNo,tripNo);
        return ResponseEntity.status(200).body(result);
    }

}
