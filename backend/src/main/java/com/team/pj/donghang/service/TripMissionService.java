package com.team.pj.donghang.service;

import com.team.pj.donghang.domain.entity.TripMission;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TripMissionService {
    // 현재 사용자의 미션 목록 조회
    List<TripMission> getCurrentMissions(Long tripNo);

    // 사용자의 현재 일정에 미션 추가
    void addTripMission(TripMission tripMission);

    // mission_no를 통해 커스텀 미션 정보 DB에서 삭제
    void deleteTripMission(Long tripMissionNo);

}