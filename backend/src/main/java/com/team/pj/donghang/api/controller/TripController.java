package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.api.request.TripCreateRequestDto;
import com.team.pj.donghang.api.request.TripUpdateRequestDto;
import com.team.pj.donghang.api.response.TripResponseDto;
import com.team.pj.donghang.domain.dto.CultureDetailDto;
import com.team.pj.donghang.domain.dto.PlaceCommonDto;
import com.team.pj.donghang.domain.dto.UserSchedule;
import com.team.pj.donghang.domain.entity.PlaceCommon;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.service.TripService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponses;
import io.swagger.v3.oas.annotations.Operation;
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
        //임시유저로 추후에 로그인과 user 완성 되면 수정해야함.
        UserSchedule user = new UserSchedule(1L);
        tripService.createTrip(user, tripCreateRequestDto);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/recommendList")
    @Operation(summary = "장소 추천 리스트, 현재의 api는 django 에서 추천해주는 내용이 category 별로 날려준다고 생각하고 구현" ,
            description =
            "예시 1. : 페스티벌" +
            "api/trip/recommendList?category=festival&commonNoList=225,298,437\n" +
            "예시 2. : 문화시설" +
            "api/trip/recommendList?category=culture&commonNoList=15,50,151,198,215,256\n" +
            "예시 3. : 레저" +
            "api/trip/recommendList?category=leisure&commonNoList=13,44,47,52,53,59,62\n" +
            "예시 4. :음식점" +
            "api/trip/recommendList?category=restaurant&commonNoList=2,7,11,12,14,17,18\n" +
            "예시 5. :쇼핑" +
            "api/trip/recommendList?category=shopping&commonNoList=3,6,33,37,38,39,40\n" +
            "예시 6. :투어장소" +
            "api/trip/recommendList?category=tourist&commonNoList=5,9,10,16,21,23,24,25,26,28\n"
    )
    @ApiResponses({

    })
    public ResponseEntity<List<? extends PlaceCommonDto>> getRecommendList(
            @ApiIgnore Authentication authentication,
            @ApiParam(value = "장소 추천을 위한 commonNo 리스트" ,example ="15,50,151,198,215,256 ",required = true)Long[] commonNoList,
            @ApiParam(value = "장소 추천을 위한 category ",example = "culture",required = true)String category){
        List<Long> list =Arrays.asList(commonNoList);


        return ResponseEntity.status(200).body(tripService.recommendPlaceList(list,category));

    }
    @GetMapping("/getMyTripList")
    @ApiOperation(value = "내 일정 리스트")
    @ApiResponses({

    })
    public ResponseEntity<List<TripResponseDto>> getTripList(
            @ApiIgnore Authentication authentication,
            @ApiParam(value = "일정 정보들을 가져오기 위한 userno",required = true)Long userNo){
        List<TripResponseDto> list = tripService.getUserTripList(userNo);
        return ResponseEntity.status(200).body(list);
    }
    @GetMapping("")
    @ApiOperation(value = "특정 일정 1개")
    @ApiResponses({

    })
    public ResponseEntity<TripResponseDto> getMyOneTrip(
            @ApiIgnore Authentication authentication,
            @ApiParam(value = "일정 정보들을 가져오기 위한 userno",required = true)Long userNo,
            @ApiParam(value = "갖고올 일정 번호",required = true)Long tripNo){
        TripResponseDto result = tripService.getUserTrip(userNo,tripNo);
        return ResponseEntity.status(200).body(result);
    }

    //궁금한 사항 여행 중에도 업데이트 가능한지
    //여행 끝나고 여행 기록 삭제 되는지 삭제될때, 이미지 삭제 되는지
    @PutMapping
    @ApiOperation(value = "내 일정 수정")
    @ApiResponses({

    })
    public ResponseEntity updateTrip(
            @ApiIgnore Authentication authentication,
            @ApiParam(value = "일정 수정을 위한 정보",required = true) @RequestBody TripUpdateRequestDto tripUpdateRequestDto
    ){
        UserSchedule user = new UserSchedule(1L);
        tripService.updateTrip(user,tripUpdateRequestDto);
        return new ResponseEntity<>(HttpStatus.OK) ;
    }

    @DeleteMapping("/{tripNo}")
    @ApiOperation(value = "내 일정 1개 삭제")
    @ApiResponses({

    })
    public ResponseEntity deleteTrip(
            @ApiIgnore Authentication authentication,
            @PathVariable(value = "tripNo", required = true)Long tripNo
    ){
        UserSchedule user = new UserSchedule(1L);
        tripService.deleteTrip(user,tripNo);
        return new ResponseEntity<>( HttpStatus.OK);
    }

}
