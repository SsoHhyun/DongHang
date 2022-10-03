package com.team.pj.donghang.repository;

import com.team.pj.donghang.domain.entity.TripMission;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TripMissionRepository extends JpaRepository<TripMission, Long> {
    // trip_no로 해당 여행의 미션 목록 조회
    List<TripMission> findTripMissionsByTrip_TripNo(Long trip_tripNo);

    void deleteTripMissionByTripMissionNo(Long tripMissionNo);
}
