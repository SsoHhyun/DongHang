package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.api.request.SurveyRequestDto;
import com.team.pj.donghang.domain.entity.CustomUserDetails;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.service.SurveyService;
import com.team.pj.donghang.service.UrlService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

@Api(value = "설문조사와 관련된 API" ,tags = {"survey"})
@RestController("survey 설문조사")
@Controller
@CrossOrigin("*")
@RequestMapping("/survey")
public class SurveyController {
    private final Logger logger = LoggerFactory.getLogger(SurveyController.class);

    @Autowired
    UrlService urlService;

    @Autowired
    SurveyService surveyService;

    private static String ofiginUrl ="http://j7a504.p.ssfay.io";
    @GetMapping("/generate/url")
    @ApiOperation(value = "설문조사 url 생성해주고 반환 그리고 redis 에 저장하여 url과 유저 매핑")
    @ApiResponses({

    })
    public ResponseEntity<String> getGenerateUrl(
            @ApiIgnore Authentication authentication
            ){
        CustomUserDetails userDetails = (CustomUserDetails)authentication.getDetails();
        String url = urlService.generateUrl(userDetails.getUser());
        return  ResponseEntity.status(HttpStatus.CREATED).body(url);
    }

    //url 하나로 합쳐 버리자 내부 로직에서 처리하기! 그냥 Put으로 하나로 처리하기.
//    @PostMapping("")
//    @ApiOperation(value = "설문 조사 처음 할때 들어오는 url")
//    @ApiResponses({
//
//    })
//    public ResponseEntity saveSurvey(
//            @ApiParam @RequestParam("url") String url,
//            @ApiParam @RequestBody SurveyRequestDto surveyRequestDto
//    ){
//        User user = urlService.getUrlUser(url);
//        surveyService.surveyCreate(user,surveyRequestDto);
//        urlService.urlDelete(url);
//        return new ResponseEntity(HttpStatus.CREATED);
//    }

    @PutMapping("")
    @ApiOperation(value = "")
    @ApiResponses({

    })
    public ResponseEntity updateSurvey(
            @ApiParam @RequestParam("url") String url,
            @ApiParam @RequestBody SurveyRequestDto surveyRequestDto
    ){
        User user = urlService.getUrlUser(url);
        surveyService.surveyCreateAUpdate(user,surveyRequestDto);
        urlService.urlDelete(url);
        return new ResponseEntity(HttpStatus.OK);
    }

}
