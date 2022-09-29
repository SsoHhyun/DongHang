package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.MissionCreateRequestDto;
import com.team.pj.donghang.api.response.MissionResponseDto;
import com.team.pj.donghang.domain.entity.Mission;
import com.team.pj.donghang.domain.entity.User;

import java.util.List;

public interface MissionService {
    //미션 전체 목록
    public List<MissionResponseDto> getUserMissionList(Long userNo);

    //미션 한 개
    public Mission getUserMission(Long MissionNo);

    // 미션 생성
    public void createMission(User user, MissionCreateRequestDto missionCreateRequestDto);

    // 미션 수정
    // 미션 수정 기능 빼기로 한 걸로 알고 있는데 창작 미션은 수정 기능 있어도 될 것 같기도..?

    //미션 삭제
    // 1. 해당 여행 일정 삭제하아 미션도 같이 삭제
    public boolean deleteTripMission(User user, Long missionNo, Long tripNo);

    // 2. 창작 미셔 자체 삭제
    public boolean deleteUserMission(User user, Long missionNo, Long missionCategoryNo);
}
