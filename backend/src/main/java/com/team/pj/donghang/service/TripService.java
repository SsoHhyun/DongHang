package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.TripCreateRequestDto;
import com.team.pj.donghang.domain.dto.PlaceCommonDto;
import com.team.pj.donghang.domain.dto.TripDto;
import com.team.pj.donghang.domain.dto.UserSchedule;
import com.team.pj.donghang.domain.entity.PlaceCommon;
import com.team.pj.donghang.domain.entity.User;

import java.util.List;

public interface TripService {
    // 일정들에 딸린 사진들 보기

    //사진 업로드

    //사진 삭제
    // 장소 상세 정보들 list 조회
    public List<PlaceCommon> recommendPlaceList(List<Long> commonNoList);
    public void createTrip(UserSchedule user, TripCreateRequestDto tripCreateRequestDto, List<Long> commonNoList);
    //일정 생성하기

    //일정 삭제하기
    public void deleteTrip(User user, Long tripNo);
    //일정 수정하기
    public void updateTrip(User user, TripCreateRequestDto tripCreateRequestDto, List<Long> tripPlaceList);
    public TripDto getUserTrip (Long userNo,Long tripNo);
    //일정 한개 가져오기
    public List<TripDto> getUserTripList(Long userNo);
    //일정 검색??? ????
}
