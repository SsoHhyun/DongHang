package com.team.pj.donghang.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class TripDto {
    @JsonProperty(value = "trip_no")
    Long tripNo;
    @JsonProperty(value = "start_date")
    String startDate;
    @JsonProperty(value = "end_date")
    String endDate;
    @JsonProperty(value = "user_no")
    Long userNo;
    @JsonProperty(value = "trip_name")
    String tripName;

//    public TripDtoipDto(Long tripNo, String startDate, String endDate, Long userNo, String tripName) {
//        this.tripNo = tripNo;
//        this.startDate = startDate;
//        this.endDate = endDate;
//        this.userNo = userNo;
//        this.tripName = tripName;
//    }


}
