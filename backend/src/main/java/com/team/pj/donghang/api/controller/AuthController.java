package com.team.pj.donghang.api.controller;

import com.team.pj.donghang.api.request.UserLoginRequestDto;
import com.team.pj.donghang.service.AuthService;
import io.swagger.annotations.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Api(value = "사용자 인증 관련 API")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("")
    @ApiOperation(value = "로그인")
    @ApiResponses({
            @ApiResponse(code = 200, message = "로그인 성공", response = UserLoginRequestDto.class),
            @ApiResponse(code = 401, message = "이메일 또는 비밀번호가 공백", response = UserLoginRequestDto.class),
    })
    public ResponseEntity<?> login(
            @RequestBody
            @ApiParam(value = "아이디, 비밀번호", required = true)
            UserLoginRequestDto userLoginRequestDto
    ) {
        try {
            log.debug("user login request: {}", userLoginRequestDto.toString());
            String token = authService.login(userLoginRequestDto);
            log.debug("auth token: "+token);

            return new ResponseEntity<>(token, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>("UNAUTHORIZED", HttpStatus.UNAUTHORIZED);
        }
    }
}
