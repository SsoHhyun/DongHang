package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.api.response.TripResponseDto;
import com.team.pj.donghang.domain.entity.CustomUserDetails;
import com.team.pj.donghang.domain.entity.Mission;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.service.MissionService;
import com.team.pj.donghang.service.TripMissionService;
import com.team.pj.donghang.service.TripService;
import io.swagger.annotations.*;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;
import java.util.logging.Logger;

@Api(value = "미션 관리 API")
@CrossOrigin("*")
@RestController
@RequestMapping("/api/mission")
public class MissionController {

    @Autowired
    TripService tripService;

    @Autowired
    MissionService missionService;

    @Autowired
    TripMissionService tripMissionService;

    @GetMapping("/trip")
    @ApiOperation(
            value = "특정 여행의 미션 목록 조회. 처음 조회 시 무작위 3개의 미션 반환한다",
            notes = "mission_category_no 0은 기본 미션, 1은 스페셜 미션, 2는 커스텀 미션이다"
    )
    public ResponseEntity<?> getMissions(
            @ApiParam(value = "찾고자 하는 여행의 trip_no")
            @RequestParam Long tripNo
    ) {
        List<Mission> missions = missionService.getMissions(tripNo);

        return ResponseEntity.status(HttpStatus.OK).body(missions);
    }

    @GetMapping("/refresh")
    @ApiOperation(
            value = "특정 여행의 특정 미션을 교체한다",
            notes = "missionNo에 해당하는 미션을 삭제하고, 새로운 미션을 반환한다"
    )
    public ResponseEntity<?> refreshMission(
            @RequestParam Long missionNo,
            @RequestParam Long tripNo
    ) {
        Mission result = missionService.refreshMission(missionNo, tripNo);
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}