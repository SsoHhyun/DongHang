package com.team.pj.donghang.service;

import com.team.pj.donghang.domain.entity.TripMission;
import com.team.pj.donghang.repository.TripMissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripMissionServiceImpl implements TripMissionService {

    @Autowired
    TripMissionRepository tripMissionRepository;

    @Override
    public void addTripMission(TripMission tripMission) {
        tripMissionRepository.save(tripMission);
    }

    @Override
    public void deleteTripMission(Long missionNo) {
        tripMissionRepository.removeTripMissionByMission_MissionNoIs(missionNo);
    }
}