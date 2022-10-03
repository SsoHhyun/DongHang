package com.team.pj.donghang.service;

import com.team.pj.donghang.domain.entity.Mission;
import com.team.pj.donghang.domain.entity.TripMission;
import com.team.pj.donghang.repository.MissionRepository;
import com.team.pj.donghang.repository.TripMissionRepository;
import com.team.pj.donghang.repository.TripRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Slf4j
@Service
public class MissionServiceImpl implements MissionService {

    private static final Long BASIC_MISSION = 0L;
    private static final Long SPECIAL_MISSION = 1L;
    private static final Long CUSTOM_MISSION = 2L;

    @Autowired
    MissionRepository missionRepository;

    @Autowired
    TripMissionRepository tripMissionRepository;

    @Autowired
    TripRepository tripRepository;

    @Override
    public Mission getMissionInfo(Long missionNo) {
        return missionRepository.findMissionByMissionNo(missionNo);
    }

    @Override
    @Transactional
    public void addMission(Mission mission) {
        missionRepository.save(mission);
    }

    @Override
    @Transactional
    public void deleteCustomMission(Long missionNo) {
        missionRepository.deleteMissionByMissionNo(missionNo);
    }

    /**
     * refresh는 일반, 스페셜 미션에 대해서만 수행 -> 삭제, 추가는 trip_mission에서만 이루어져야 한다
     * @param missionNo 이 missionNo를 갖는 tripMission을 삭제한다.
     * @param tripNo 해당하는 일정에 대해 수행한다.
     * @return 새로고침한 Mission
     */
    @Override
    @Transactional
    public Mission refreshMission(Long missionNo, Long tripNo) {
        // 모든 일반, 스페셜 미션 조회
        List<Mission> allMissions = missionRepository.findMissionsByMissionCategoryNoIsNot(CUSTOM_MISSION);
        Collections.shuffle(allMissions);

        // 현재 여행의 미션 조회
        List<TripMission> tripMissions = tripMissionRepository.findTripMissionsByTrip_TripNo(tripNo);

        // 새로운 미션
        Mission newMission = null;
        // 삭제할 trip mission no
        Long tripMissionNoToDelete = 0L;
        for(Mission mission: allMissions) { // 모든 미션과
            for(TripMission tripMission: tripMissions) { // 현재 여행의 미션을 비교
                // 겹치지 않는 미션을 찾으면 loop 종료
                if(!Objects.equals(mission.getMissionNo(), tripMission.getMission().getMissionNo())) {
                    newMission = mission;
                    log.debug("반환할 미션 : {}", newMission);
                    tripMissionNoToDelete = tripMission.getMission().getMissionNo();
                    log.debug("삭제할 미션 번호: {}", tripMissionNoToDelete);
                    break;
                }
            }
        }

        if(newMission != null) {
            // 기존 TripMission에서 삭제하고
            tripMissionRepository.deleteTripMissionByTripMissionNo(tripMissionNoToDelete);
            // TripMission에 새로 저장
            tripMissionRepository.save(
                    TripMission.builder()
                            .mission(newMission)
                            .trip(tripRepository.findByTripNo(tripNo))
                            .build()
            );
        }
        // 새 TripMission 반환
        return newMission;
    }

    /**
     * 여행 일정에 대한 미션들을 모두 반환한다
     * @param tripNo 조회할 여행 일정의 pk
     * @return 여행 일정에 대한 미션들
     */
    @Override
    @Transactional
    public List<Mission> getMissions(Long tripNo) {
        List<TripMission> tripMissions = tripMissionRepository.findTripMissionsByTrip_TripNo(tripNo);

        // 여행 미션이 아직 없다면 무작위 3개 생성해서 보내줌
        if(tripMissions == null || tripMissions.size() == 0) {
            // 전체 일반 미션 조회해서 무작위로 섞음
            List<Mission> allMissions = missionRepository.findMissionsByMissionCategoryNoIsNot(CUSTOM_MISSION);
            Collections.shuffle(allMissions);

            // 상위 3개만 반환
            List<Mission> newMissions = new ArrayList<>();
            newMissions.add(allMissions.get(0));
            newMissions.add(allMissions.get(1));
            newMissions.add(allMissions.get(2));

            // 새로운 미션 저장
            for(Mission mission: newMissions) {
                tripMissionRepository.save(
                        TripMission.builder()
                                .mission(mission)
                                .trip(tripRepository.findByTripNo(tripNo))
                                .build()
                );
            }

            log.debug("미션들 : {}", newMissions);

            return newMissions;

        } else { // 여행 미션이 존재한다면 여행 미션 목록 반환
            List<Mission> result = new ArrayList<>();
            for (TripMission tripMission : tripMissions) {
                // TripMission의 mission_no를 통해 Mission 조회
                result.add(getMissionInfo(tripMission.getMission().getMissionNo()));
            }
            return result;
        }
    }
}