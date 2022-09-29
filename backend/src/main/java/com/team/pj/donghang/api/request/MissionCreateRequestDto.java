package com.team.pj.donghang.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "Mission Create Dto", description = "미션 분류 번호, 미션 내용, 미션 계절")
public class MissionCreateRequestDto {
    @ApiModelProperty(name = "미션 분류 번호", example = "0: 기본 미션, 1: 스페셜 미션, 2: 유저 창작 미션")
    private Long missionCategoryNo;

    @ApiModelProperty(name = "미션 내용", example = "부모님과 단풍잎 주워 책갈피 만들기")
    private String content;

    @ApiModelProperty(name = "미션 계절", example = "봄")
    private String season;
}
