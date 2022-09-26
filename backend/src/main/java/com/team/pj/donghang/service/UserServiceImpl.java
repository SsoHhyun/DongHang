package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.UserRegisterReq;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public boolean isIdExist(String id) {
        return userRepository.existsUserById(id);
    }

    @Override
    public boolean isNickNameExist(String nickname) {
        return userRepository.existsUserByNickname(nickname);
    }

    @Override
    public boolean isEmailExist(String email) {
        return userRepository.existsUserByEmail(email);
    }

    @Override
    public User createUser(UserRegisterReq userRegisterReq) {
        User user = User.builder()
                .id(userRegisterReq.getId())
                .password(userRegisterReq.getPassword()) // TODO: password must be encrypted
                .email(userRegisterReq.getEmail())
                .nickname(userRegisterReq.getNickname())
                .build();

        log.debug("created user: "+user.toString());

        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUserByUserNo(Long userNo) {
        return userRepository.findUserByUserNo(userNo);
    }
}
