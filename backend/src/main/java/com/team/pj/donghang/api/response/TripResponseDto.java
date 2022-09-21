package com.team.pj.donghang.api.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Map;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ApiModel("Trip Response Dto")
public class TripResponseDto {
    @ApiModelProperty(name ="trip 일정 번호")
    private Long tripNo;

    @ApiModelProperty(name ="유저 번호")
    private Long userNo;

    @ApiModelProperty(name ="일정 시작 날짜",example = "20220901")
    String startDate;
    @ApiModelProperty(name ="일정 끝나는 날짜",example = "20220903")
    String endDate;
    @ApiModelProperty(name ="일정 제목")
    String tripName;

    @ApiModelProperty(name = "사진 list")
    private Map<String,String> files;
}
