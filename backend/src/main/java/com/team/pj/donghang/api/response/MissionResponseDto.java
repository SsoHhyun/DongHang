package com.team.pj.donghang.api.response;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ApiModel("Mission Response Dto")
public class MissionResponseDto {
    @ApiModelProperty(name = "미션 번호")
    private Long missionNo;

    @ApiModelProperty(name = "유저 번호")
    private Long userNo;

    @ApiModelProperty(name = "미션 내용")
    private String content;

    @ApiModelProperty(name = "미션 계절")
    private String season;

    @ApiModelProperty(name = "미션 분류 번호")
    private Long missionCategoryNo;
}
