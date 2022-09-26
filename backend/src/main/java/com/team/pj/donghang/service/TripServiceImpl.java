package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.TripCreateRequestDto;
import com.team.pj.donghang.api.request.TripUpdateRequestDto;
import com.team.pj.donghang.api.response.TripResponseDto;
import com.team.pj.donghang.domain.dto.*;
import com.team.pj.donghang.domain.entity.*;
import com.team.pj.donghang.repository.*;
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
    ShoppingRepository shoppingRepository;
    @Autowired
    CultureRepository cultureRepository;
    @Autowired
    LeisureRepository leisureRepository;
    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    FestivalRepository festivalRepository;

    @Autowired
    TouristRepository touristRepository;

    @Autowired
    PlaceCommonRepository placeCommonRepository;
    @Transactional
    @Override
    public List<? extends PlaceCommonDto> recommendPlaceList(List<Long> commonNoList, String category) {

        if (category.equals("shopping")) {
            List<ShoppingDetailDto> list = new ArrayList<>();
            for (Long commonNo : commonNoList) {
                if(shoppingRepository.existsById(commonNo)) {
                    list.add(getShoppingDetail(commonNo));
                }else {
                    return null;
                }
            }
            return list;
        } else if (category.equals("culture")) {
            List<CultureDetailDto> list = new ArrayList<>();
            for (Long commonNo : commonNoList) {
                if(cultureRepository.existsById(commonNo)) {
                    list.add(getCultureDetail(commonNo));
                }else {
                    return null;
                }
            }
            return list;
        } else if (category.equals("festival")) {
            List<FestivalDetailDto> list = new ArrayList<>();
            for (Long commonNo : commonNoList) {
                if(festivalRepository.existsById(commonNo)) {
                    list.add(getFestivalDetail(commonNo));
                }else {
                    return null;
                }
            }
            return list;
        } else if (category.equals("restaurant")) {
            List <RestaurantDetailDto> list = new ArrayList<>();
            for (Long commonNo : commonNoList) {
                if(restaurantRepository.existsById(commonNo)) {
                    list.add(getRestaurantDetail(commonNo));
                }else {
                    return null;
                }
            }
            return list;
        } else if (category.equals("tourist")) {
            List<TouristSpotDetailDto> list = new ArrayList<>();
            for (Long commonNo : commonNoList) {
                if(touristRepository.existsById(commonNo)) {
                    list.add(getTourSpotDetail(commonNo));
                }else {
                    return null;
                }
            }
            return list;
        } else {
            List<LeisureDetailDto> list = new ArrayList<>();
            for (Long commonNo : commonNoList) {
                if(leisureRepository.existsById(commonNo)) {
                    list.add(getLeisureDetail(commonNo));
                }else {
                    return null;
                }
            }
            return list;
        }


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
    @Transactional
    @Override
    public boolean deleteTrip(UserSchedule userSchedule, Long tripNo) {
        User user = new User(userSchedule.getUserNo(),"test","test1234","test","test@test.com","");
        Trip trip = tripRepository.findByTripNo(tripNo);
        if(trip==null){
            return false;
        }

        if(user.getUserNo()!= trip.getUser().getUserNo()) {
            return false;
        }


        tripPlaceRepository.deleteByTrip_TripNo(tripNo);
        tripRepository.delete(trip);
        return true;
    }

    @Transactional
    @Override
    public boolean updateTrip(UserSchedule userSchedule, TripUpdateRequestDto tripUpdateRequestDto) {
        User user = new User(userSchedule.getUserNo(),"test","test1234","test","test@test.com","");

        Trip trip = tripRepository.findByTripNo(tripUpdateRequestDto.getTripNo());

        if(trip==null){
            return false;
        }
        if(user.getUserNo()!= trip.getUser().getUserNo()) {
            return false;
        }


        trip.setTripName(tripUpdateRequestDto.getTripName());
        trip.setEndDate(tripUpdateRequestDto.getEndDate());
        trip.setStartDate(tripUpdateRequestDto.getStartDate());

        Long num = tripRepository.save(trip).getTripNo();
        tripPlaceRepository.deleteByTrip_TripNo(num);

        List<TripPlace> tripPlaceList = new ArrayList<>();
        Long[] commonNoList = tripUpdateRequestDto.getCommonNoList();
        for (Long commonNo:commonNoList) {
            PlaceCommon common = placeCommonRepository.findByCommonNo(commonNo);

            TripPlace tripPlace = TripPlace.builder()
                    .trip(trip)
                    .common(common)
                    .build();
            tripPlaceList.add(tripPlace);
        }
        tripPlaceRepository.saveAll(tripPlaceList);
        return true;
    }
    @Transactional
    @Override
    public TripResponseDto getUserTrip(Long userNo,Long TripNo) {
        Trip trip = tripRepository.findByTripNo(TripNo);
        if(trip==null){
            return null;
        }
        List<PlaceCommon> placeCommonList =new ArrayList<>();
        List<TripPlace> tripPlaceList =new ArrayList<>();
//        if(tripPlaceRepository.existsById(t)
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

    @Transactional
    @Override
    public List<TripResponseDto> getUserTripList(Long userNo) {
        List<TripResponseDto> result = new ArrayList<>();

        List<Trip> list = tripRepository.findAllByUser_UserNo(userNo);
        if(list ==null){
            return null;
        }
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

    //추후 어떻게 수정될지는 모르지만 확시나, table에 존재하는지 확인해야한다면... 일단 테스틑 필요함
    private String checkCommonNoTable(Long commonNo){
        if(cultureRepository.existsById(commonNo)){
            return "restaurant";
        }else if(festivalRepository.existsById(commonNo)){
            return "festival";
        }else if(leisureRepository.existsById(commonNo)){
            return "leisure";
        }else if(cultureRepository.existsById(commonNo)){
            return "culture";
        } else if (shoppingRepository.existsById(commonNo)) {
            return "shopping";
        } else if (touristRepository.existsById(commonNo)) {
            return "tourist";
        }
        else {
            return "";
        }
    }

    private CultureDetailDto getCultureDetail(Long commonNo){
        PlaceCommon common = placeCommonRepository.findByCommonNo(commonNo);
        CultureDetail culture = cultureRepository.findByCommon(common);
        CultureDetailDto detail = CultureDetailDto.builder()
                .commonNo(common.getCommonNo()).cat1(common.getCat1())
                .cat2(common.getCat2()).cat3(common.getCat3())
                .addr1(common.getAddr1()).addr2(common.getAddr2())
                .areacode(common.getAreacode()).contentId(common.getContentId())
                .contentTypeId(common.getContentTypeId()).tel(common.getTel())
                .title(common.getTitle()).firstImage1(common.getFirstImage1())
                .firstImage2(common.getFirstImage2()).mapx(common.getMapx())
                .mapy(common.getMapy()).mlevel(common.getMlevel())

                .chkCreditcard(culture.getChkCreditcard()).chkPet(culture.getChkPet())
                .parking(culture.getParking()).restDate(culture.getRestDate())
                .useFee(culture.getUseFee()).useTime(culture.getUseTime())
                .scale(culture.getScale()).spendTime(culture.getSpendTime())
                .build();

        return detail;
    }
    private FestivalDetailDto getFestivalDetail(Long commonNo){
        PlaceCommon common = placeCommonRepository.findByCommonNo(commonNo);
        FestivalDetail festival = festivalRepository.findByCommon(common);;
        FestivalDetailDto detail = FestivalDetailDto.builder()
                .commonNo(common.getCommonNo()).cat1(common.getCat1())
                .cat2(common.getCat2()).cat3(common.getCat3())
                .addr1(common.getAddr1()).addr2(common.getAddr2())
                .areacode(common.getAreacode()).contentId(common.getContentId())
                .contentTypeId(common.getContentTypeId()).tel(common.getTel())
                .title(common.getTitle()).firstImage1(common.getFirstImage1())
                .firstImage2(common.getFirstImage2()).mapx(common.getMapx())
                .mapy(common.getMapy()).mlevel(common.getMlevel())

                .startDate(festival.getStartDate()).endDate(festival.getEndDate())
                .place(festival.getPlace()).festivalGrade(festival.getFestivalGrade())
                .placeInfo(festival.getPlaceInfo()).playTime(festival.getPlayTime())
                .program(festival.getProgram()).spendTime(festival.getSpendTime())
                .useTime(festival.getUseTime())

                .build();

        return detail;
    }
    private LeisureDetailDto getLeisureDetail(Long commonNo){
        PlaceCommon common = placeCommonRepository.findByCommonNo(commonNo);
        LeisureDetail leisure = leisureRepository.findByCommon(common);;
        LeisureDetailDto detail = LeisureDetailDto.builder()
                .commonNo(common.getCommonNo()).cat1(common.getCat1())
                .cat2(common.getCat2()).cat3(common.getCat3())
                .addr1(common.getAddr1()).addr2(common.getAddr2())
                .areacode(common.getAreacode()).contentId(common.getContentId())
                .contentTypeId(common.getContentTypeId()).tel(common.getTel())
                .title(common.getTitle()).firstImage1(common.getFirstImage1())
                .firstImage2(common.getFirstImage2()).mapx(common.getMapx())
                .mapy(common.getMapy()).mlevel(common.getMlevel())

                .accomCount(leisure.getAccomCount()).chkCreditcard(leisure.getChkCreditcard())
                .chkPet(leisure.getChkPet()).infoCenter(leisure.getInfoCenter())
                .openPeriod(leisure.getOpenPeriod()).parking(leisure.getParking())
                .useTime(leisure.getUseTime())
                .build();

        return detail;
    }
    private RestaurantDetailDto getRestaurantDetail(Long commonNo){
        PlaceCommon common = placeCommonRepository.findByCommonNo(commonNo);
        RestaurantDetail restaurant = restaurantRepository.findByCommon(common);;
        RestaurantDetailDto detail = RestaurantDetailDto.builder()
                .commonNo(common.getCommonNo()).cat1(common.getCat1())
                .cat2(common.getCat2()).cat3(common.getCat3())
                .addr1(common.getAddr1()).addr2(common.getAddr2())
                .areacode(common.getAreacode()).contentId(common.getContentId())
                .contentTypeId(common.getContentTypeId()).tel(common.getTel())
                .title(common.getTitle()).firstImage1(common.getFirstImage1())
                .firstImage2(common.getFirstImage2()).mapx(common.getMapx())
                .mapy(common.getMapy()).mlevel(common.getMlevel())

                .chkCreditcard(restaurant.getChkCreditcard()).infoCenter(restaurant.getInfoCenter())
                .firstMenu(restaurant.getFirstMenu()).openDate(restaurant.getOpenDate())
                .openTime(restaurant.getOpenTime()).packing(restaurant.getPacking())
                .parking(restaurant.getParking()).reservation(restaurant.getReservation())
                .restDate(restaurant.getRestDate()).scale(restaurant.getScale())
                .seat(restaurant.getSeat()).smoking(restaurant.getSmoking()).treatMenu(restaurant.getTreatMenu())
                .build();

        return detail;
    }
    private TouristSpotDetailDto getTourSpotDetail(Long commonNo){
        PlaceCommon common = placeCommonRepository.findByCommonNo(commonNo);
        TouristSpotDetail tour = touristRepository.findByCommon(common);;
        TouristSpotDetailDto detail = TouristSpotDetailDto.builder()
                .commonNo(common.getCommonNo()).cat1(common.getCat1())
                .cat2(common.getCat2()).cat3(common.getCat3())
                .addr1(common.getAddr1()).addr2(common.getAddr2())
                .areacode(common.getAreacode()).contentId(common.getContentId())
                .contentTypeId(common.getContentTypeId()).tel(common.getTel())
                .title(common.getTitle()).firstImage1(common.getFirstImage1())
                .firstImage2(common.getFirstImage2()).mapx(common.getMapx())
                .mapy(common.getMapy()).mlevel(common.getMlevel())

                .accomCount(tour.getAccomCount()).chkCreditcard(tour.getChkCreditcard())
                .chkPet(tour.getChkPet()).heritage1(tour.getHeritage1())
                .heritage2(tour.getHeritage2()).heritage3(tour.getHeritage3())
                .openDate(tour.getOpenDate()).parking(tour.getParking())
                .restDate(tour.getRestDate()).useSeason(tour.getUseSeason())
                .useTime(tour.getUseTime())
                .build();

        return detail;
    }
    private ShoppingDetailDto getShoppingDetail(Long commonNo){
        PlaceCommon common = placeCommonRepository.findByCommonNo(commonNo);
        ShoppingDetail shoppingDetail  =shoppingRepository.findByCommon(common);
        ShoppingDetailDto placeCommonDto = ShoppingDetailDto.builder()
                .commonNo(common.getCommonNo()).cat1(common.getCat1())
                .cat2(common.getCat2()).cat3(common.getCat3())
                .addr1(common.getAddr1()).addr2(common.getAddr2())
                .areacode(common.getAreacode()).contentId(common.getContentId())
                .contentTypeId(common.getContentTypeId()).tel(common.getTel())
                .title(common.getTitle()).firstImage1(common.getFirstImage1())
                .firstImage2(common.getFirstImage2()).mapx(common.getMapx())
                .mapy(common.getMapy()).mlevel(common.getMlevel())

                .chkCreditcard(shoppingDetail.getChkCreditcard()).chkPet(shoppingDetail.getChkPet())
                .cultureCenter(shoppingDetail.getCultureCenter()).fairDay(shoppingDetail.getFairDay())
                .infoCenter(shoppingDetail.getInfoCenter()).openDate(shoppingDetail.getOpenDate())
                .openTime(shoppingDetail.getOpenTime()).parking(shoppingDetail.getParking())
                .restDate(shoppingDetail.getRestDate()).restRoom(shoppingDetail.getRestRoom())
                .saleItem(shoppingDetail.getSaleItem()).saleItemCost(shoppingDetail.getSaleItemCost())
                .scale(shoppingDetail.getScale()).shopGuide(shoppingDetail.getShopGuide())
                .build();
        return placeCommonDto;
    }


}
