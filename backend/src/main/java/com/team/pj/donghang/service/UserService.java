package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.UserRegisterRequestDto;
import com.team.pj.donghang.domain.entity.User;

public interface UserService {

    boolean isIdExist(String id); // id 중복 확인

    boolean isNickNameExist(String nickname); // 닉네임 중복 확인

    boolean isEmailExist(String email); // 이메일 중복 확인

    User createUser(UserRegisterRequestDto userRegisterReq); // 사용자 회원 가입

    User getUserByUserId(String userId); // 사용자 id로 사용자 정보 조회
}
