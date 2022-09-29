package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.MissionCreateRequestDto;
import com.team.pj.donghang.api.response.MissionResponseDto;
import com.team.pj.donghang.domain.entity.Mission;
import com.team.pj.donghang.domain.entity.TripMission;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.repository.MissionRepository;
import com.team.pj.donghang.repository.TripMissionRepository;
import com.team.pj.donghang.repository.UserRepository;
import com.team.pj.donghang.repository.VisitedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class MissionServiceImpl implements MissionService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    MissionRepository missionRepository;

    @Autowired
    TripMissionRepository tripMissionRepository;

    @Autowired
    VisitedRepository visitedRepository;


    // 미션 전체 목록
    @Override
    public List<MissionResponseDto> getUserMissionList(Long userNo, Long tripNo) {
        Mission mission = missionRepository.findByMissionNo(MissionNo);
        if (mission != null) {
            List<TripMission> tripMissionList = new ArrayList<>();
            tripMissionRepository.findAllTripMissionByTrip_TripNo(tripNo);

        }
    }

    // 미션 한 개
    @Override
    public Mission getUserMission(Long MissionNo) {
        return null;
    }

    // 미션 생성
    @Transactional
    @Override
    public void createMission(User user, MissionCreateRequestDto missionCreateRequestDto) {
        Mission mission = Mission.builder().missionNo();
    }

    // 미션 삭제 (다시 짜야 됨)
    // 1. 여행 일정을 삭제해서 미션이 날아가는 경우
    @Transactional
    @Override
    public boolean deleteTripMission(User user, Long missionNo, Long tripNo) {
        Mission mission = missionRepository.findByMissionNo(missionNo);
        if (mission == null) {
            return false;
        }
        if (user.getUserNo() != mission.getUser().getUserNo()) {
            return false;
        }
        tripMissionRepository.deleteByTrip_TripNo(tripNo);
        missionRepository.delete(mission);
        return true;
    }


    // 2. 사용자 창작 미션을 삭제하는 경우

}
