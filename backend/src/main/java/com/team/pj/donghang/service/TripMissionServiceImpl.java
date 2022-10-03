package com.team.pj.donghang.service;

import com.team.pj.donghang.domain.entity.TripMission;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripMissionServiceImpl implements TripMissionService {
    @Override
    public List<TripMission> getCurrentMissions(Long tripNo) {
        return null;
    }

    @Override
    public void addTripMission(TripMission tripMission) {

    }

    @Override
    public void deleteTripMission(Long tripMissionNo) {

    }
}