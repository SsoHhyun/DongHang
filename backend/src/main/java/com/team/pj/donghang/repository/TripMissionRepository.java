package com.team.pj.donghang.repository;

import com.team.pj.donghang.domain.entity.Mission;
import com.team.pj.donghang.domain.entity.Trip;
import com.team.pj.donghang.domain.entity.TripMission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TripMissionRepository extends JpaRepository<TripMission, Long> {
    List<TripMission> findAllByTrip_TripNo(Long tripNo);

    void deleteByTrip_TripNo(Long trip_no);
    // badge 관련 api 필요할 수도

}
