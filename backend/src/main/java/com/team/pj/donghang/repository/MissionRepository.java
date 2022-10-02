package com.team.pj.donghang.repository;

import com.team.pj.donghang.domain.entity.Mission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MissionRepository extends JpaRepository<Mission, Long> {
    List<Mission> findAllByUser_UserNo(Long userNo);

    Mission findByMissionNo(Long missionNo);

    // 여행 넘버로 미션 찾기
    List<Mission> findByTripNo(Long tripNo);

    void deleteUserMadeMission(Long mission_no, Long mission_category_no);
}
