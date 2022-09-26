package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.UserRegisterReq;
import com.team.pj.donghang.domain.entity.User;

import java.util.Optional;

public interface UserService {

    boolean isIdExist(String id); // id 중복 확인

    boolean isNickNameExist(String nickname); // 닉네임 중복 확인

    boolean isEmailExist(String email); // 이메일 중복 확인

    User createUser(UserRegisterReq userRegisterReq); // 사용자 회원 가입

    Optional<User> getUserByUserNo(Long userNo); // pk로 사용자 정보 조회
}
