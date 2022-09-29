package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.api.request.MissionCreateRequestDto;
import com.team.pj.donghang.domain.entity.CustomUserDetails;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.service.MissionService;
import io.swagger.annotations.*;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import springfox.documentation.annotations.ApiIgnore;

import java.util.logging.Logger;

@Api(value = "미션 관리 API")
@CrossOrigin("*")
@Controller
@RequestMapping("/api/mission")
public class MissionController {
    private final Logger log = LoggerFactory.getLogger(MissionController.class);

    @Autowired
    MissionService missionService;

    @PostMapping
    @ApiOperation(value = "미션 생성")
    @ApiResponses({
            @ApiResponse(code = 201, message = "미션 생성 성공")
    })
    public ResponseEntity missionCreate(
            @ApiIgnore Authentication authentication,
            @ApiParam(value = "미션 관련 데이터", required = true)
            @RequestBody MissionCreateRequestDto missionCreateRequestDto
            ){
        CustomUserDetails customUserDetails = (CustomUserDetails)authentication.getDetails();
        User user = customUserDetails.getUser();
        missionService.createMission(user, missionCreateRequestDto);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
