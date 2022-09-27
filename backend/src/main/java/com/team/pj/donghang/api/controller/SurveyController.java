package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.service.SurveyService;
import com.team.pj.donghang.service.UrlService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
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
    private static String ofiginUrl ="http://j7a504.p.ssfay.io";
    @GetMapping("/generate/url")
    @ApiOperation(value = "")
    @ApiResponses({

    })
    public ResponseEntity<String> getGenerateUrl(
            @ApiIgnore Authentication authentication
            ){
        String url = urlService.generateUrl()
        return  ResponseEntity.status(HttpStatus.CREATED).body(url);
    }

    @PostMapping("")
    @ApiOperation(value = "")
    @ApiResponses({

    })
    public ResponseEntity saveSurvey(){
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("")
    @ApiOperation(value = "")
    @ApiResponses({

    })
    public ResponseEntity updateSurvey(){
        return new ResponseEntity(HttpStatus.OK);
    }



}
