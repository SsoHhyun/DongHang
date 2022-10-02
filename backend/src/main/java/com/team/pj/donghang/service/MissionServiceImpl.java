package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.MissionCreateRequestDto;
import com.team.pj.donghang.api.response.MissionResponseDto;
import com.team.pj.donghang.domain.entity.Mission;
import com.team.pj.donghang.domain.entity.Trip;
import com.team.pj.donghang.domain.entity.TripMission;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.repository.*;
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

    @Autowired
    TripRepository tripRepository;


    // 미션 전체 목록


    @Transactional
    @Override
    public MissionResponseDto getUserMission(Long userNo, Long missionNo) {
        Mission mission = missionRepository.findByMissionNo(missionNo);
        if (mission == null) {
            return null;
        }
        Long missionUserNo = mission.getUser().getUserNo();
        if (missionUserNo.compareTo(userNo) != 0) {
            return null;
        }
        MissionResponseDto missionResponseDto = MissionResponseDto
                .builder()
                .missionNo(mission.getMissionNo())
                .userNo(mission.getUser().getUserNo())
                .content(mission.getContent())
                .season(mission.getSeason())
                .missionCategoryNo(mission.getMissionCategoryNo())
                .build();
        return missionResponseDto;
    }

    // 미션 하나 가져오기
    @Override
    public Mission getOneMission(Long missionNo) {
        Mission mission = missionRepository.findByMissionNo(missionNo);
        if (mission == null) {
            return null;
        } else {
            return mission;
        }
    }

    // 미션 전체 목록 가져오기
    @Override
    public List<MissionResponseDto> getUserMissionList(Long userNo) {
        List<MissionResponseDto> result = new ArrayList<>();
        List<Mission> missionList = missionRepository.findAllByUser_UserNo(userNo);
        if (missionList == null) {
            return null;
        }
        for (Mission mission : missionList) {
            MissionResponseDto missionResponseDto = MissionResponseDto
                    .builder()
                    .missionNo(mission.getMissionNo())
                    .userNo(mission.getUser().getUserNo())
                    .content(mission.getContent())
                    .season(mission.getSeason())
                    .missionCategoryNo(mission.getMissionCategoryNo())
                    .build();
            result.add(missionResponseDto);
        }
        return result;

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
    public boolean deleteAllMission(Long tripNo) {
        List<TripMission> missionList = tripMissionRepository.findAllByTrip_TripNo(tripNo);
        if (missionList == null) {
            return false;
        }

        tripMissionRepository.deleteByTrip_TripNo(tripNo);
        return true;
    }


    // 2. 사용자 창작 미션을 삭제하는 경우

}
