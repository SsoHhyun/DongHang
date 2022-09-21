package com.team.pj.donghang.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ApiModel("Trip Create Regester Dto")
@Builder

public class TripCreateRequestDto {
    @ApiModelProperty(name = "일정 제목")
    private String tripName;

    @ApiModelProperty(name = "일정 시작 날짜")
    private String startDate;
}
