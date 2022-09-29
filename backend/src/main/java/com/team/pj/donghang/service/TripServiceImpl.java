package com.team.pj.donghang.service;

import com.team.pj.donghang.api.request.TripCreateRequestDto;
import com.team.pj.donghang.api.request.TripUpdateRequestDto;
import com.team.pj.donghang.api.response.LastTripResponseDto;
import com.team.pj.donghang.api.response.TripResponseDto;
import com.team.pj.donghang.domain.dto.*;
import com.team.pj.donghang.domain.entity.*;
import com.team.pj.donghang.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
    UserRepository userRepository;

    @Autowired
    PlaceCommonRepository placeCommonRepository;
    @Autowired
    PhotoRepository photoRepository;

    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
    @Transactional
    @Override
    public  List getPlaceDetail(Long commonNo, String category) {

        if (category.equals("shopping")) {
            List<ShoppingDetailDto> list = new ArrayList<>();
            if(shoppingRepository.existsById(commonNo)) {
                list.add(getShoppingDetail(commonNo));
                return list;
            }else {
                return null;
            }
        } else if (category.equals("culture")) {
            List<CultureDetailDto> list = new ArrayList<>();
            if(cultureRepository.existsById(commonNo)) {
                list.add(getCultureDetail(commonNo));
                return list;
            }else {
                return null;
            }
        } else if (category.equals("festival")) {
            List<FestivalDetailDto> list = new ArrayList<>();
            if(festivalRepository.existsById(commonNo)) {
                list.add(getFestivalDetail(commonNo));
                return list;
            }else {
                return null;
            }
        } else if (category.equals("restaurant")) {
            List <RestaurantDetailDto> list = new ArrayList<>();
            if(restaurantRepository.existsById(commonNo)) {
                list.add(getRestaurantDetail(commonNo));
                return list;
            }else {
                return null;
            }
        } else if (category.equals("tourist")) {
            List<TouristSpotDetailDto> list = new ArrayList<>();
            if(touristRepository.existsById(commonNo)) {
                list.add(getTourSpotDetail(commonNo));
                return list;
            }else {
                return null;
            }
        } else {
            List<LeisureDetailDto> list = new ArrayList<>();
            if(leisureRepository.existsById(commonNo)) {
                list.add(getLeisureDetail(commonNo));
                return list;
            }else {
                return null;
            }
        }


    }

    @Transactional
    @Override
    public void createTrip(User user, TripCreateRequestDto tripCreateRequestDto) {
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
    public boolean deleteTrip(User user, Long tripNo) {
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
    public boolean updateTrip(User user, TripUpdateRequestDto tripUpdateRequestDto) {

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
        Long tripUserNo =trip.getUser().getUserNo();
        if(tripUserNo.compareTo(userNo)!=0){
            return null;
        }
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
    public Trip getTripInfo(Long tripNo) {
        Trip trip = tripRepository.findByTripNo(tripNo);
        if(trip==null){
            return null;
        }else {
            return trip;
        }
    }

    @Transactional
    @Override
    public LastTripResponseDto getUserPastOneTrip(Long userNo,Long TripNo) {
        Trip trip = tripRepository.findByTripNo(TripNo);
        if(trip==null){
            return null;
        }
        Long tripUserNo =trip.getUser().getUserNo();
        if(tripUserNo.compareTo(userNo)!=0){
            return null;
        }
        List<PlaceCommon> placeCommonList =new ArrayList<>();
        List<TripPlace> tripPlaceList =new ArrayList<>();
        List<Photo> photoList;
        tripPlaceList=tripPlaceRepository.findAllByTrip_TripNo(trip.getTripNo());

        photoList = photoRepository.findByTrip(trip);
        List<String> urlList = new ArrayList<>();
        String image="";
        photoList.forEach(photo ->{
            urlList.add(photo.getPhotoPath());
        });
        if(urlList!=null){
            image = urlList.get(0);
        }

        for (TripPlace tripPlace:tripPlaceList) {
            placeCommonList.add(tripPlace.getCommon());
        }
        LastTripResponseDto tripResponseDto = LastTripResponseDto
                .builder()
                .placeList(placeCommonList)
                .tripNo(trip.getTripNo())
                .userNo(trip.getUser().getUserNo())
                .endDate(trip.getEndDate())
                .startDate(trip.getStartDate())
                .tripName(trip.getTripName())
                .imageList(urlList)
                .thumbnail(image)
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

    @Transactional
    @Override
    public TripResponseDto getTodayTrip(Long userNo){
        List<Trip> list = tripRepository.findAllByUser_UserNo(userNo);
        String todayStr = new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis()));

        Date today,startDate,endDate;

        try {
             today = new Date(dateFormat.parse(todayStr).getTime());
        }catch (ParseException e) {
            throw new RuntimeException(e);
        }
        for(Trip trip :list) {
            try {
                startDate = new Date(dateFormat.parse(trip.getStartDate()).getTime());
                endDate = new Date(dateFormat.parse(trip.getStartDate()).getTime());
            } catch (ParseException e) {
                throw new RuntimeException(e);
            }

            int compare = startDate.compareTo(today);
            int compare_2 = endDate.compareTo(today);

            if (compare >= 0 && compare_2 <= 0) {
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
        }
        return null;

    }


    @Transactional
    @Override
    public List<LastTripResponseDto> getUserLastTripList(Long userNo) throws ParseException {
        List<LastTripResponseDto> result = new ArrayList<>();

        List<Trip> list = tripRepository.findAllByUser_UserNo(userNo);
        if(list ==null){
            return null;
        }
        List<PlaceCommon> placeCommonList;
        List<TripPlace> tripPlaceList ;
        List<Photo> photoList;

        for (Trip trip:list) {
            String todayStr = new SimpleDateFormat("yyyyMMdd").format(new Date(System.currentTimeMillis()));

            Date startDate = new Date(dateFormat.parse(trip.getStartDate()).getTime());
            Date today = new Date(dateFormat.parse(todayStr).getTime());

            int compare = startDate.compareTo(today);
            if(compare<0) {
                tripPlaceList = new ArrayList<>();
                placeCommonList = new ArrayList<>();
                tripPlaceList = tripPlaceRepository.findAllByTrip_TripNo(trip.getTripNo());
                photoList = photoRepository.findByTrip(trip);
                List<String> urlList = new ArrayList<>();
                String image="";

                photoList.forEach(photo ->{
                    urlList.add(photo.getPhotoPath());
                });
                if(urlList!=null){
                    image = urlList.get(0);
                }

                for (TripPlace tripPlace : tripPlaceList) {
                    placeCommonList.add(tripPlace.getCommon());
                }
                LastTripResponseDto tripResponseDto = LastTripResponseDto
                        .builder()
                        .placeList(placeCommonList)
                        .tripNo(trip.getTripNo())
                        .userNo(trip.getUser().getUserNo())
                        .endDate(trip.getEndDate())
                        .startDate(trip.getStartDate())
                        .tripName(trip.getTripName())
                        .imageList(urlList)
                        .thumbnail(image)
                        .build();
                result.add(tripResponseDto);
            }

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
