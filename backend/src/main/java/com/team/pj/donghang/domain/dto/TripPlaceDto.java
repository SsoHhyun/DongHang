package com.team.pj.donghang.domain.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class TripPlaceDto {
    @JsonProperty(value = "trip_place_no")
    Long tripPlaceNo;
    @JsonProperty(value = "common_no")
    Long commonNo;
    @JsonProperty(value = "trip_no")
    Long tripNo;
}
