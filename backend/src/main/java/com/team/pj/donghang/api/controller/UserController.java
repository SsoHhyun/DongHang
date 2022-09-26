package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.api.request.UserRegisterReq;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.service.UserService;
import io.swagger.annotations.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Api(value = "사용자 관련 API")
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("")
    @ApiOperation(value = "회원 가입")
    @ApiResponses({
            @ApiResponse(code = 201, message = "회원 가입되었습니다")
    })
    public ResponseEntity<?> register(
            @RequestBody
            @ApiParam(value = "회원가입 필수 정보", required = true)
            UserRegisterReq userRegisterReq
    ) {
        log.debug("user register request body: "+userRegisterReq.toString());

        User user = userService.createUser(userRegisterReq);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/id")
    @ApiOperation(value = "아이디 중복 체크")
    @ApiResponses({
            @ApiResponse(code = 200, message = "사용 가능한 아이디입니다"),
            @ApiResponse(code = 409, message = "이미 사용 중인 아이디입니다")
    })
    public ResponseEntity<?> checkIdDuplicated(
            @RequestParam
            @ApiParam(value = "사용자 아이디", required = true)
            String id
    ) {
        log.debug("check user id duplicated: "+id);

        if(userService.isIdExist(id)) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping("/nickname")
    @ApiOperation(value = "닉네임 중복체크")
    @ApiResponses({
            @ApiResponse(code = 200, message = "사용 가능한 닉네임입니다"),
            @ApiResponse(code = 409, message = "이미 사용 중인 닉네임입니다")
    })
    public ResponseEntity<?> checkNickNameDuplicated(
            @RequestParam
            @ApiParam(value = "사용자 닉네임", required = true)
            String nickname
    ) {
        log.debug("check user nickname duplicated: "+nickname);

        if(userService.isNickNameExist(nickname)) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

    @GetMapping("/email")
    @ApiOperation(value = "이메일 중복체크")
    @ApiResponses({
            @ApiResponse(code = 200, message = "사용 가능한 이메일입니다"),
            @ApiResponse(code = 409, message = "이미 사용 중인 이메일입니다")
    })
    public ResponseEntity<?> checkEmailDuplicated(
            @RequestParam
            @ApiParam(value = "사용자 이메일", required = true)
            String email
    ) {
        log.debug("check email duplicated: "+email);

        if(userService.isEmailExist(email)) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } else {
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
