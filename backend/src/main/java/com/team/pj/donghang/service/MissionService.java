package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.MissionCreateRequestDto;
import com.team.pj.donghang.api.response.MissionResponseDto;
import com.team.pj.donghang.domain.entity.Mission;
import com.team.pj.donghang.domain.entity.Trip;
import com.team.pj.donghang.domain.entity.User;

import java.util.List;

//- 조회
//        - API (trip_no 통해 trip mission table 조회, 랜덤으로 미션 새로고침하는 걸로 미션 꺼내주기)
//        - gettodaytrip() 오늘 날짜 포함해서 지금 진행 중인 일정 번호
//        - 프론트에서 일정 가져오고(프론트에서 호출) trip no로 api를 받도록 해서 trip mission 조회
//        - 해당 trip no에 대한 trip mission 조회
//        -> 0이면 trip missson 생성 x
//        -> 개수가 있으면 현재 있는 걸로 보내주기 (API 따로)
//        - 서비스단에 랜덤으로 호출하는 거 가져와서 초기에 불러주기 (초기 미션 생성)
//        - 미션 새로고침 -> 프론트에서 API 요청 -> 미션 테이블에서 현재 이 trip mission 조회 후 mission no 겹치지 않게, 오늘date의 month를 가져와 그거에 맞는 애들을 필터링해서 보내주기
//        - 커스텀 미션 -> 모달에서 가져온 거 단순 추가, 삭제
//        - 미션 컨텐츠, 카테고리 넘버, 이런 거 query로 일단 데이터에 넣기 -> 시즌 통해 필터링
//        - DTO 따로 만들어서 반환
//        - 미션 모달로 만듦
//        - custom을 프론트에서 데이터 들고 보내줌
//        1. back에서 가져와서 뿌려주기 -> 한꺼번에 가지고 있다가 axios 처리 후 return
//        2. fromt에서 관리하기




public interface MissionService {
    //미션 전체 목록
    public List<MissionResponseDto> getUserMissionList(Long userNo);

    //미션 dto로 바꾸기
    public MissionResponseDto getUserMission(Long userNo, Long missionNo);

    // 미션 한 개 가져오기
    public Mission getOneMission(Long missionNo);

    // 미션 생성
    public void createMission(User user, MissionCreateRequestDto missionCreateRequestDto);

    // 미션 삭제(일정 삭제 시 미션도 함께 삭제)
    public boolean deleteAllMission(Long tripNo);
}
