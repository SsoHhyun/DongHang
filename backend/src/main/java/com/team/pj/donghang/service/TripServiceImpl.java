package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.TripCreateRequestDto;
import com.team.pj.donghang.api.response.TripResponseDto;
import com.team.pj.donghang.domain.dto.UserSchedule;
import com.team.pj.donghang.domain.entity.PlaceCommon;
import com.team.pj.donghang.domain.entity.Trip;
import com.team.pj.donghang.domain.entity.TripPlace;
import com.team.pj.donghang.domain.entity.User;
import com.team.pj.donghang.repository.PlaceCommonRepository;
import com.team.pj.donghang.repository.TripPlaceRepository;
import com.team.pj.donghang.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;


@Service
//@RequiredArgsConstructor
public class TripServiceImpl implements TripService{
    @Autowired
     TripRepository  tripRepository;
    @Autowired
    TripPlaceRepository tripPlaceRepository;

    @Autowired
    PlaceCommonRepository placeCommonRepository;
    @Transactional
    @Override
    public List<PlaceCommon> recommendPlaceList(List<Long> commonNoList) {
        List<PlaceCommon> list = new ArrayList<>();
        for (Long commonNo:commonNoList) {
            PlaceCommon common = placeCommonRepository.findByCommonNo(commonNo);
//            PlaceCommonDto placeCommonDto = PlaceCommonDto.builder()
//                    .commonNo(common.getCommonNo())
//                    .cat1(common.getCat1())
//                    .cat2(common.getCat2())
//                    .cat3(common.getCat3())
//                    .addr1(common.getAddr1())
//                    .addr2(common.getAddr2())
//                    .areacode(common.getAreacode())
//                    .contentId(common.getContentId())
//                    .contentTypeId(common.getContentTypeId())
//                    .tel(common.getTel())
//                    .title(common.getTitle())
//                    .firstImage1(common.getFirstImage1())
//                    .firstImage2(common.getFirstImage2())
//                    .mapx(common.getMapx())
//                    .mapy(common.getMapy())
//                    .mlevel(common.getMlevel())
//                    .build();
            list.add(common);
        }
            return list;
    }

    @Transactional
    @Override
    public void createTrip(UserSchedule userSchedule, TripCreateRequestDto tripCreateRequestDto) {
        User user = new User(userSchedule.getUserNo(),"test","test1234","test","test@test.com","");
        Trip trip = Trip.builder().tripName(tripCreateRequestDto.getTripName())
                .startDate(tripCreateRequestDto.getStartDate())
                .user(user)
                .endDate(tripCreateRequestDto.getEndDate()).build();
        Long num = tripRepository.save(trip).getTripNo();
        List<TripPlace> tripPlaceList = new ArrayList<>();
        Long[] commonNoList = tripCreateRequestDto.getCommonNoList();
        for (Long commonNo:commonNoList) {
            PlaceCommon common = placeCommonRepository.findByCommonNo(commonNo);

            TripPlace tripPlace = TripPlace.builder()
                    .trip(trip)
                    .common(common)
                    .build();
            tripPlaceList.add(tripPlace);
        }
        tripPlaceRepository.saveAll(tripPlaceList);
    }

    @Override
    public void deleteTrip(User user, Long tripNo) {

    }

    @Override
    public void updateTrip(User user, TripCreateRequestDto tripCreateRequestDto, List<Long> tripPlaceList) {

    }

    @Override
    public TripResponseDto getUserTrip(Long userNo,Long TripNo) {
        Trip trip = tripRepository.findByTripNo(TripNo);
        List<PlaceCommon> placeCommonList =new ArrayList<>();
        List<TripPlace> tripPlaceList =new ArrayList<>();
        tripPlaceList=tripPlaceRepository.findAllByTrip_TripNo(trip.getTripNo());

        for (TripPlace tripPlace:tripPlaceList) {
            placeCommonList.add(tripPlace.getCommon());
        }
        TripResponseDto tripResponseDto = TripResponseDto
                .builder()
                .placeList(placeCommonList)
                .tripNo(trip.getTripNo())
                .userNo(trip.getUser().getUserNo())
                .endDate(trip.getEndDate())
                .startDate(trip.getStartDate())
                .tripName(trip.getTripName())
                .build();
        return tripResponseDto;
    }

    @Override
    public List<TripResponseDto> getUserTripList(Long userNo) {
        List<TripResponseDto> result = new ArrayList<>();

        List<Trip> list = tripRepository.findAllByUser_UserNo(userNo);
        List<PlaceCommon> placeCommonList;
        List<TripPlace> tripPlaceList ;

        for (Trip trip:list) {
            tripPlaceList = new ArrayList<>();
            placeCommonList = new ArrayList<>();
            tripPlaceList=tripPlaceRepository.findAllByTrip_TripNo(trip.getTripNo());
            for (TripPlace tripPlace:tripPlaceList) {
                placeCommonList.add(tripPlace.getCommon());
            }
            TripResponseDto tripResponseDto = TripResponseDto
                    .builder()
                    .placeList(placeCommonList)
                    .tripNo(trip.getTripNo())
                    .userNo(trip.getUser().getUserNo())
                    .endDate(trip.getEndDate())
                    .startDate(trip.getStartDate())
                    .tripName(trip.getTripName())
                    .build();
            result.add(tripResponseDto);

        }
        return result;
    }
}
